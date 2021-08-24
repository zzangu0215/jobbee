const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Developer {
    _id: ID
    name: String
    email: String
    password: String
    githubName: String
    jobs: [Job]
  }

  type Employer {
    _id: ID
    name: String
    email: String
    password: String
    jobs: [Job]
  }

  type Job {
    _id: ID
    listingName: String
    description: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    Developers: [Developer]
    aEmployer(email: String!): Employer
    aDeveloper(email: String!): Developer
  }

  type Mutation {
    addJob()
    updateJob()

  }
`;

module.exports = typeDefs;
