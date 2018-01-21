import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import TeamType from './team.type';
import { addTeam, removeTeam, updateTeam } from './team.schema';

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
  updateTeam: {
    type: TeamType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID)},
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
    resolve: updateTeam
  },
  removeTeam: {
    type: TeamType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: removeTeam
  }
};
