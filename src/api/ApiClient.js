
class ApiClient {
  constructor() {
    this.baseURL = 'http://localhost:4567/'
  };

  fetchAnimalsBySelectedArea = (selectedArea, setSidebarAnimals) => {
    const URL = this.baseURL + 'get-endangered-species-by-selected-area' + '?selected_area_name=' + selectedArea;

    return fetch(URL)
      .then(response => response.json()) 
      .then(json => {
        setSidebarAnimals(json);
      });
  }
}

module.exports = ApiClient;
