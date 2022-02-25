import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./schema.graphql";
import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import SchemaLink from "apollo-link-schema";
import apolloLogger from "apollo-link-logger";
import debugLink from "./debugLink";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      articles: () => [
        {
          id: 1,
          title: "Article 1",
          tags: [
            { id: 1, name: "HTML", color: "blue", articlesCount: 10 },
            { id: 2, name: "JS", color: "yellow", articlesCount: 12 },
            { id: 3, name: "PHP", color: "red", articlesCount: 6 }
          ]
        }
      ]
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([apolloLogger, debugLink, new SchemaLink({ schema })])
});

export default client;
