import { IResolvers } from "apollo-server-express";
import { characters } from "../../../characters";

export const peopleResolvers: IResolvers = {
    Query: {
        allPersons: (_, __, { dataSources }) =>
        { return dataSources.personAPI.getAllPersons() },
        person: (_, { name }, { dataSources }) =>
        dataSources.personAPI.getPersonByName({ personName: name }),
        characters: () => {
            return characters;
        }
    }
};
