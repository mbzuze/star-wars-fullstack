const { gql } = require('apollo-server')
const Person  = gql`

type Person {
    name: String 
    height: String
    mass: String
    gender: String
    homeworld: [Planets]
}
 type Planets {
    name: String 
    rotation_period: Float 
    orbital_period: Float 
    diameter: Float 
    climate: String 
    gravity: String 
    terrain: String 
    surface_water: Float 
    population: Float 
    residents: [Person]
    films: [Films]
 }

 type Films {
    title: String
    episode_id: Float 
    opening_crawl: String
    director: String
    producer: String
 }


type Query {
    allPersons: [Person]
    person: [Person]
  }
  
  `;
module.exports = Person;