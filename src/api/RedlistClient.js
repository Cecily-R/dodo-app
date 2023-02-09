//import {setState} from 'react'
const URL = 'https://apiv3.iucnredlist.org/api/v3/'
const token = '11a48c54be73c4330849e89a168673c2857782d9983f84e3498506410e585a5d'

class RedListClient {
  constructor() {
    this.list = []
  }

  fetchSpeciesByCountry(country, callback) {
    const fullUrl = URL + "country/getspecies/" + country + "?token=" + token;
    let promise = fetch(fullUrl)
      .then((res) => res.json())
      .then((data) => {callback(data)})
    return promise    
  }

  fetchSpeciesInfo(scientificName) {
    const fullUrl = URL + "species/" + scientificName + "?token=" + token;
    let promise = fetch(fullUrl)
      .then((res) => res.json())
    return promise 
  }

  fetchSpeciesByGroup(group, callback) {
    const fullUrl = URL + "comp-group/getspecies/" + group + "?token=" + token;
    let promise = fetch(fullUrl)
      .then((res) => res.json())
      .then((data) => {callback(data)})
    return promise
  }
}

module.exports = RedListClient;