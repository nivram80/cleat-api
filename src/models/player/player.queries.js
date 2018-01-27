import { GraphQLID, GraphQLList } from 'graphql';
import PlayerType from './player.type';
import { getPlayer, getPlayers } from './player.schema';

export default {
  player: {
    type: PlayerType,
    args: { id: { type: GraphQLID } },
    resolve: getPlayer
  },
  players: {
    type: new GraphQLList(PlayerType),
    resolve: getPlayers
  }
};