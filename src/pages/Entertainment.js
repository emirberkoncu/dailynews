import React, { useEffect, useState } from 'react';
import Loading from '../Components/Loading';

const Entertainment = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Eğlence haberlerini çek
  useEffect(() => {
    const fetchEntertainmentNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://gnews.io/api/v4/top-headlines?category=entertainment&lang=en&country=us&max=20&apikey=105f1d6c02307a64fb2f41b1dfe7fc25'
        );
        const data = await response.json();
        setNews(data.articles); // Haberler data.articles içinde geliyor
        setLoading(false);
      } catch (error) {
        console.error('Eğlence haberlerini çekerken bir hata oluştu:', error);
        setLoading(false);
      }
    };

    fetchEntertainmentNews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Entertainment News</h1>
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
                  e.target.onerror = null; // Hata durumunda döngüye girmemesi için
                  e.target.src = 'https://via.placeholder.com/150?text=NEWS'; // Yedek resim
                }}
              />
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="mb-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
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

export default Entertainment;
