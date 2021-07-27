import { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const getNews = async () => {
    const response = await axios.get('https://api.coinstats.app/public/v1/news?skip=0&limit=24');
    setNews(response.data.news);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <h1> NEWS </h1>
      <div>
        <p>News goes here</p>
        {news.map((item) => (
          <div key={item.id}>
            <img src={item.imgURL} alt="img" />
            <div>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.source}</p>
              <p>{item.feedDate}</p>
              <p>{item.link}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
