const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String!
    users: [User!]!
  }
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }
  type Item {
    id: ID!
    name: String!
    quantity: Int!
    category: String!
    owner: String!
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    createItem(name: String!, quantity: Int!, category: String!, owner: String!): Item!
  }
`;

module.exports = {
  typeDefs
}