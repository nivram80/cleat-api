import { GraphQLString, GraphQLNonNull, GraphQLID, GraphQLBoolean } from 'graphql';
import PlayerType from './player.type';
import { addPlayer, removePlayer, updatePlayer } from './player.schema';

export default {
  addPlayer: {
    type: PlayerType,
    args: {
      firstName: {
        firstName: 'firstName',
        type: new GraphQLNonNull(GraphQLString)
      },
      lastName: {
        lastName: 'lastName',
        type: new GraphQLNonNull(GraphQLString)
      },
      hallOfFame: {
        hallOfFame: 'hallOfFame',
        type: new GraphQLNonNull(GraphQLBoolean)
      }
    },
    resolve: addPlayer
  },
  updatePlayer: {
    type: PlayerType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID)},
      firstName: {
        firstName: 'firstName',
        type: new GraphQLNonNull(GraphQLString)
      },
      lastName: {
        lastName: 'lastName',
        type: new GraphQLNonNull(GraphQLString)
      },
      hallOfFame: {
        hallOfFame: 'hallOfFame',
        type: new GraphQLNonNull(GraphQLBoolean)
      }
    },
    resolve: updatePlayer
  },
  removePlayer: {
    type: PlayerType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: removePlayer
  }
};