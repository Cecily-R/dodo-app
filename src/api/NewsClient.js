class NewsClient {
  constructor() {
    this.URL = 'https://newsapi.org/v2/everything?q=endangered species&from=2023-02-07&sortBy=popularity&apiKey=da86dadbff91415699979cdc79e21197'
  };

  fetchNewsArticles = (setState, setLoading) => {  
    return fetch(this.URL)
      .then(setLoading(true))
      .then(response => response.json())
      .then(json => {
        setState(json);
        setLoading(false);
      });
  }
};

module.exports = NewsClient;