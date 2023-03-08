import React, { useEffect, useState } from "react";
import NewsStory from './newsStory'

const News = () => {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false) 
  const date = new Date().toISOString().split('T')[0]
  const apiKey = 'da86dadbff91415699979cdc79e21197';

  const newsApiURL = 'https://newsapi.org/v2/everything?q=animal conservation&from=' + `${date}` + '&sortBy=popularity&apiKey=' + `${apiKey}`
  useEffect(() => {
    fetchNews()
  }, []);

  const fetchNews = async () => {
    await fetch(newsApiURL)
      .then(setIsLoading(true))
      .then(response => response.json())
      .then(json => {
        setNews(json);
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return (
      <div id='loadingNews'></div>
    )
  }

  return (
    <div className='news-component'>
      {news && news.articles.map((story, i) => {return <NewsStory key={i} story={story}/>})}
    </div>
  )
};

export default News;