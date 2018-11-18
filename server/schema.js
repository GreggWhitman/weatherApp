const fetch = require("node-fetch");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require("graphql");

const LocationType = new GraphQLObjectType({
  name: "Location",
  description: "...",

  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: data => data.title
    },
    id: {
      type: GraphQLString,
      resolve: data => data.woeid
    }
  })
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    desription: "...",

    fields: () => ({
      locations: {
        type: new GraphQLList(LocationType),
        args: {
          queryString: { type: GraphQLString }
        },
        resolve: (root, args) =>
          fetch(
            `https://www.metaweather.com/api/location/search/?query=${
              args.queryString
            }`
          ).then(response => response.json())
      }
    })
  })
});
