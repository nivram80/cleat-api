import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import SportQueries from './models/sport/sport.queries';
import SportMutations from './models/sport/sport.mutations';
import TeamMutations from './models/team/team.mutations';

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
    updateSport: SportMutations.updateSport,
    removeSport: SportMutations.removeSport,
    addTeam: TeamMutations.addTeam,
    updateTeam: TeamMutations.updateTeam,
    removeTeam: TeamMutations.removeTeam
  })
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

module.exports = schema;
