import TeamType from './team.type';
import { getTeam, getTeams } from './team.schema';
import { GraphQLID, GraphQLList } from 'graphql';

export default {
  team: {
    type: TeamType,
    args: { id: { type: GraphQLID } },
    resolve: getTeam
  },
  teams: {
    type: new GraphQLList(TeamType),
    resolve: getTeams
  }
};