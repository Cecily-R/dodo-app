import RedlistClient from './RedlistClient'
import {setState} from 'react'

class RedlistModel {
  constructor() {
    this.client = new RedlistClient()
    this.filteredCountryList = []
    this.groupList = []
    this.finalList = []
    this.speciesInfoList = []
    //const [filteredCountry, setFilteredCountry] = setState()
  }

  speciesByCountry(iso, group, status) {
    let promise = this.client.fetchSpeciesByCountry(iso, (data) => {
      data.result.forEach(animal => {
        if (animal.category === status) this.filteredCountryList.push(animal.scientific_name)
      })   
    })
    return promise
  }

  speciesByGroup(group) {
    let promise = this.client.fetchSpeciesByGroup(group, (data) => {
      console.log(group)
      data.result.forEach(animal => {
        this.groupList.push(animal.scientific_name)
      })
      console.log(this.groupList)
    })
    return promise
  }

  filteredSpecies(iso, group, status) {
    let promiseOne = this.speciesByCountry(iso, group, status)
    let promiseTwo = this.speciesByGroup(group)
      .then(() => {
        this.filteredCountryList.forEach((animal) => {
          if (this.groupList.includes(animal)) console.log(true)
        })
      })
      let promiseThree = Promise.all([promiseOne, promiseTwo])
        .then(() => {
          this.finalList = this.filteredCountryList.filter(animal => this.groupList.includes(animal))
        })
      return promiseThree
  }

  speciesInfo(animal) {
    let promise = this.client.fetchSpeciesInfo(animal)
    return promise
  }

  test(iso, group, status, setSidebarCountry, sidebarCountry) {
    let promise = this.filteredSpecies(iso, group, status)
    promise
      .then(() => {
        let allPromises = this.finalList.map(animal => this.speciesInfo(animal, setSidebarCountry))
        return Promise.all(allPromises)
      })
      .then((allPromises) => {
        setSidebarCountry(allPromises)
      })
  }
}

export default RedlistModel;