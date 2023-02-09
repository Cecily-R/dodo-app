class RedlistModel {
  constructor() {
    this.client = new RedlistClient()
    this.filteredCountryList = []
    this.groupList = []
    this.speciesByGroupList = []
    this.finalList = []
  }

 

  //listOfGroups(setGroupList) {
  //  this.client.fetchGroupList()
  //    .then((data)=> {
  //      data.result.forEach(group => {
  //        this.groupList.push(group.group_name)
  //      })
  //      setGroupList(this.groupList.sort())
  //    })
  //}

  speciesByCountryAndStatus(iso, status) {
    this.client.fetchSpeciesByCountry(iso)
      .then((data) => {
        data.result.forEach(animal => {
          if (animal.category === status) this.filteredCountryList.push(animal.scientific_name)
        })
        console.log(this.filteredCountryList)
      })
      
  }

  //speciesGroupList(group) {
  //  this.client.fetchByGroup(group)
  //    .then((data) => {
  //      data.result.forEach(animal => {
  //        this.speciesByGroupList.push(animal.scientific_name)
  //      })
  //    })
  //    .then(() => {console.log(this.speciesByGroupList)})
  //}

  async filter(iso, group, status) {
    this.speciesGroupList(group)
    this.speciesByCountryAndStatus(iso, status)
    
  }
}

export default RedlistModel;