const { RESTDataSource } = require('apollo-datasource-rest');
const { isTypeSystemDefinitionNode } = require('graphql');

// // A schema is a collection of type definitions (hence "typeDefs")
// // that together define the "shape" of queries that are executed against
// // your data.
// const typeDefs = gql`
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Person" type defines the queryable fields for every person in our data source.
//   type Person {
//     count: Int
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "people" query returns an array of zero or more Person(s) (defined above).
//   type Query {
//     people: [Person]
//   }
// `;
class PersonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/';
  }
// leaving this inside the class to make the class easier to test
personReducer(person) {
    // console.log(this.personReducer(response.results[0].name));

    // let homeworldId = person.homeworld.split("/")[5];
    // homeworldId = str.homeworldString(":")[5];
    return person.map(person => 
        ({
            name : person.name,
            height : person.height,
            mass : person.mass,
            gender : person.gender
        }));
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
