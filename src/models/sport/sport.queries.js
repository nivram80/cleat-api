import { GraphQLID, GraphQLList } from 'graphql';
import SportType from './sport.type';
import { getSport, getSports } from './sport.schema';

export default {
  sport: {
    type: SportType,
    args: { id: { type: GraphQLID } },
    resolve: getSport
  },
  sports: {
    type: new GraphQLList(SportType),
    resolve: getSports
  }
};