import { IResolvers } from "apollo-server-express";
import { characters } from "../characters";

export const resolvers: IResolvers = {
    Query: {
        characters: () => {
            return characters;
        }
    }
};
