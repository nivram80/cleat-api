import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import TeamType from './team.type';
import { addTeam } from './team.schema';

export default {
  addTeam: {
    type: TeamType,
    args: {
      city: {
        city: 'city',
        type: new GraphQLNonNull(GraphQLString)
      },
      mascot: {
        mascot: 'mascot',
        type: new GraphQLNonNull(GraphQLString)
      },
      sport: {
        sport: 'sport',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: addTeam
  },
};
