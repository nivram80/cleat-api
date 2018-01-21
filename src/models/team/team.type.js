import { GraphQLString, GraphQLNonNull, GraphQLObjectType } from 'graphql';

export default new GraphQLObjectType({
  name: 'Team',
  description: 'A team',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    city: { type: new GraphQLNonNull(GraphQLString) },
    mascot: { type: new GraphQLNonNull(GraphQLString) },
    sport: { type: new GraphQLNonNull(GraphQLString) }
  })
});
