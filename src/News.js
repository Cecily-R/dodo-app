import React, { useEffect, useState } from "react";
import NewsStory from './newsStory'
import NewsClient from "./api/NewsClient";

const News = () => {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const newsApiURL = 'https://newsapi.org/v2/everything?q=endangered species&from=2023-02-07&sortBy=popularity&apiKey=da86dadbff91415699979cdc79e21197'
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

  function outputNews() {
    
  };

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