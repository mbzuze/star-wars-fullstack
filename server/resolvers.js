module.exports = {
    Query: {
        allPersons: (_, __, { dataSources }) =>
        dataSources.personAPI.getAllPersons(),
        person: (_, { name }, { dataSources }) =>
        dataSources.personAPI.getPersonByName({ personName: name })
    }
  };
  