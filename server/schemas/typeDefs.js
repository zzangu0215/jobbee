const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Job {
    listingName : String
    description: String
    createdAt : String
    companyName : String
  }

  type Developer {
    githubName: String
    likedBy: [User]
  }

  type Employer {
    companyName : String
    likedDevelopers: [User]
    jobs : [Job]
  }

  type Mutation {
    addUser (name: String!, email: String!, password: String!): User
    
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
