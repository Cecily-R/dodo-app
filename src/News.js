import React, { useEffect, useState } from "react";
import NewsStory from './newsStory'

const News = () => {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false) 
  const date = new Date().toISOString().split('T')[0]
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const newsApiURL = 'https://newsapi.org/v2/everything?q=animal conservation&from' + '2023.03.15' + '&sortBy=popularity&apiKey=' + `${apiKey}`
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