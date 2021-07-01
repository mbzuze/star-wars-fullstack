const { RESTDataSource } = require('apollo-datasource-rest');

class PersonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/';
  }
// leaving this inside the class to make the class easier to test
personReducer(person) {
  // console.log(this.personReducer(response.results[0].name));
    
  return person.map(async (person) => {
    let homeworldId = person.homeworld.split("/")[5];
    // homeworldId = str.homeworldString(":")[5];
    let planet = await this.get('planets/' + homeworldId);
    let planetId = planet.url.split("/")[5];
          return {
            userId: person.url.split("/")[5],
            name : person.name,
            height : person.height,
            mass : person.mass,
            gender : person.gender,
            homeworld: {
              planetId: planetId,
              name: planet.name,
              rotation_period: planet.rotation_period,
              orbital_period: planet.orbital_period,
              diameter: planet.diameter,
              climate: planet.climate,
              gravity: planet.gravity,
              terrain: planet.terrain,
              surface_water: planet.surface_water, 
              population: planet.population,
              residents: [person]
            }
          }
        });
}

  //get a list of all star wars people
  async getAllPersons() {
    
    //send a GET request to https://swapi.dev/api/people
    let response = await this.get('people');
    let data = [];
    if( response.next != null){
    let count = 1;
        while (response.next != null){
          const temp = await this.get('people', {page: count});
          Array.isArray(temp.results) ? data = data.concat(temp.results) : null ;
          response = Object.assign(response, temp)
          console.log(data)
          count++
        };
    }else{
        data = response.results;
    }
    
    return Array.isArray(data)
      ? this.personReducer(data)
      : null;
  }

  async getPersonByName({ personName }) {
    // console.log(personName);
    const response = await this.get('people', { search: personName });
    // console.log(response);

    return this.personReducer(response);
  }

  getPersonsByNames({ personNames }) {
    return Promise.all(
      personNames.map(personName => this.getPersonByName({ personName })),
    );
  }

}

module.exports = PersonAPI;
