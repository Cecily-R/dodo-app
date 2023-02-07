//import {setState} from 'react'
const URL = 'https://apiv3.iucnredlist.org/api/v3/'
const token = '11a48c54be73c4330849e89a168673c2857782d9983f84e3498506410e585a5d'

//const [countryData, setCountryData] = setState([])

class RedListClient {
  constructor() {
    this.list = []
  }

  fetchSpeciesByCountry(country, setSidebarContent) {
    const mostEndangered = []
    const fullUrl = URL + "country/getspecies/" + country + "?token=" + token;
    fetch(fullUrl)
      .then((res) => res.json())
      .then((data) => {data.result.forEach(animal => {if (animal.category === "CR") mostEndangered.push(animal.scientific_name)})})
      .then(() => console.log(mostEndangered))
      .then(() => {setSidebarContent()})
      .then(() => {mostEndangered.forEach(animal => this.fetchSpeciesInfo(animal))})
   
  }

  fetchSpeciesInfo(s_name) {
    const fullUrl = URL + "species/" + s_name + "?token=" + token;
    fetch(fullUrl)
      .then((res) => res.json())
      .then((data) => this.list.push(data.result))
      .then(() => console.log(this.list))
  }
}

module.exports = RedListClient;