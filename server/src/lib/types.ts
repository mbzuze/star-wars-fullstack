
export interface Films {
    filmId: string;
    title: string;
    episode_id: string; 
    opening_crawl: string;
    director: string;
    producer: string;
 }
export interface Person {
    userId: string;
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: [Planets];
}


export interface Planets{
   planetId: string;
   name: string; 
   rotation_period: string; 
   orbital_period: string; 
   diameter: string; 
   climate: string; 
   gravity: string; 
   terrain: string; 
   surface_water: string; 
   population: string; 
   residents: [Person];
   films: [Films];
}
