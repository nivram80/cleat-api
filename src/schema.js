import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import SportQueries from './models/sport/sport.queries';
import SportMutations from './models/sport/sport.mutations';
import TeamQueries from './models/team/team.queries';
import TeamMutations from './models/team/team.mutations';
import PlayerQueries from './models/player/player.queries';
import PlayerMutations from './models/player/player.mutations';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    sport: SportQueries.sport,
    sports: SportQueries.sports,
    team: TeamQueries.team,
    teams: TeamQueries.teams,
    player: PlayerQueries.player,
    players: PlayerQueries.players
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
    removeTeam: TeamMutations.removeTeam,
    addPlayer: PlayerMutations.addPlayer,
    updatePlayer: PlayerMutations.updatePlayer,
    removePlayer: PlayerMutations.removePlayer
  })
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

module.exports = schema;
