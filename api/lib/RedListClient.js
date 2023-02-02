const URL = 'https://swe-endangered-animals.appspot.com/single_country_data/'

class RedListClient {
  fetchSpeciesByCountry(country, callback) {
    const fullUrl = URL + country;
      fetch(fullUrl)
      .then((res) => res.json())
      .then((data) => {callback(data)})
  }
}

module.exports = RedListClient;