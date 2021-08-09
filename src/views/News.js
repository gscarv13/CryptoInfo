import { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../assets/stylesheet/News.module.css';

const News = () => {
  const [news, setNews] = useState([]);
  const getNews = async () => {
    const response = await axios.get('https://api.coinstats.app/public/v1/news/trending?skip=0&limit=24');
    setNews(response.data.news);
  };

  useEffect(() => {
    getNews();
  }, []);

  const styleImg = (url) => ({
    background: `url('${url}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  });

  const options = {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    timeZone: 'UTC',
    timeZoneName: 'short',
  };
  const date = (time, op) => (new Date(time)).toLocaleString('en-US', op);

  return (
    <div className={style.Main}>
      <h1> Trending News </h1>
      <div className={style.Grid}>
        {news.map((item) => (
          <div className={style.Card} style={styleImg(item.imgURL)} key={item.id}>
            <p className={style.Time}>
              <i className="fas fa-calendar-day" />
              {date(item.feedDate, options)}
            </p>
            <div className={style.Details}>
              <p className={style.Title}>{item.title}</p>
              <div className={style.Source}>
                <p>{item.source}</p>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div className={style.ReadMore}>
                    <i className="fas fa-external-link-alt" />
                    Read More
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
