import { gql } from "apollo-server-express";

export const typeDefs  = gql`
type Films {
    filmId: ID
    title: String
    episode_id: String 
    opening_crawl: String
    director: String
    producer: String
 }

type Person {
    userId: ID
    name: String
    height: String
    mass: String
    gender: String
    homeworld: Planets
}

type Planets {
   planetId: ID
   name: String 
   rotation_period: String 
   orbital_period: String 
   diameter: String 
   climate: String 
   gravity: String 
   terrain: String 
   surface_water: String 
   population: String 
   residents: [Person]
   films: [Films]
}

type Query {
    characters: [Person!]!
    character: [Person]
}

`;