class NewsClient {
  constructor() {
    this.URL = 'https://newsapi.org/v2/everything?q=endangered species&from=2023-02-07&sortBy=popularity&apiKey=da86dadbff91415699979cdc79e21197'
  };
  
  fetchNewsArticles = (setNews) => {  
    return fetch(this.URL)
      .then(response => response.json())
      .then(json => {
        setNews(json);
      });
  }
};

module.exports = NewsClient;