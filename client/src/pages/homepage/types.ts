interface Person {
    userId: string;
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: []
}

export interface PersonsData {
    allPersons: Person[];
}