import { GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLBoolean } from 'graphql';

export default new GraphQLObjectType({
  name: 'Player',
  description: 'A player',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    hallOfFame: { type: new GraphQLNonNull(GraphQLBoolean) }
  })
});