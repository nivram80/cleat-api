import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import SportType from './sport.type';
import { addSport, removeSport, updateSport } from './sport.schema';

export default {
  addSport: {
    type: SportType,
    args: {
      name: {
        name: 'name',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: addSport
  },
  updateSport: {
    type: SportType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID)},
      name: {
        name: 'name',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: updateSport
  },
  removeSport: {
    type: SportType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: removeSport
  }
};