import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import SportQueries from './models/sport/sport.queries';
import SportMutations from './models/sport/sport.mutations';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    sport: SportQueries.sport,
    sports: SportQueries.sports
  })
});

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addSport: SportMutations.addSport,
    removeSport: SportMutations.removeSport
  })
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

module.exports = schema;