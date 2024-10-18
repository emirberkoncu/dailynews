import React, { useEffect, useState } from 'react';
import Loading from '../Components/Loading';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // GNews API'den haberleri çek
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://gnews.io/api/v4/top-headlines?country=us&max=20&apikey=105f1d6c02307a64fb2f41b1dfe7fc25' // GNews API URL
        );
        const data = await response.json();
        setNews(data.articles); // Haberler data.articles içinde geliyor
      } catch (error) {
        console.error('Haberleri çekerken bir hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Top 20 News Headlines</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={
                  article.image || 'https://via.placeholder.com/150?text=NEWS'
                }
                alt={article.title}
                className="rounded-md mb-2 w-full h-40 object-cover"
                onError={(e) => {
                  e.target.onerror = null; // Yükleme hatası olursa döngüye girmemesi için
                  e.target.src = 'https://via.placeholder.com/150?text=NEWS'; // Hata durumunda yedek resim
                }}
              />
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="mb-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-center text-xl font-bold hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
