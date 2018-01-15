import { GraphQLString, GraphQLNonNull, GraphQLObjectType } from 'graphql';

export default new GraphQLObjectType({
  name: 'Sport',
  description: 'A sport',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  })
});