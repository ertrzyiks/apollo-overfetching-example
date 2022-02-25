const schema = `
  type Tag {
    id: Int
    name: String!
    color: String!
    articlesCount: Int!
  }

  type Article {
    id: Int
    title: String!
    tags: [Tag!]!
  }

  type Query {
    articles: [Article!]!
  }
`;

export default schema;
