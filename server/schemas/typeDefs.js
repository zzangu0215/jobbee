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

  type Mutation {
    addEmployer(name: String!, email: String!, password: String!): Employer
    addDeveloper(
      name: String!
      email: String!
      githubName: String!
      password: String!
    ): Developer
    removeJob()
  }

  type Query {
    Developers: [Developer]
    aEmployer(_id: ID!): Employer
    aDeveloper(_id: ID!): Developer
  }
`;

module.exports = typeDefs;

// type Auth {
//   token: ID!
//   user: User
// }
