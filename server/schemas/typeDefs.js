const { gql } = require("apollo-server-express");

const typeDefs = gql`
  interface User {
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

  type Developer implements User {
    _id: ID
    name: String
    email: String
    password: String
    githubName: String
    likedBy: [User]
  }

  type Employer implements User {
    _id: ID
    name: String
    email: String
    password: String
    companyName : String
    likedDevelopers: [User]
    jobs : [Job]
  }

  type Mutation {
    addUser (name: String!, email: String!, password: String!): User
    addJob (listingName: String!, description: String!, createdAt: String!, companyName: String!): Job
    addDeveloper (name: String!, email: String!, password: String!, githubName: String!): Developer
    
  }

  type Query {
    User: [User]
    aUser(_id: ID!): Developer
    Job: [Job]
    aJob(companyName: String!): Job
    Developer: [Developer]
    aDeveloper(_id: ID!): Developer
  }
`;

module.exports = typeDefs;

// type Auth {
//   token: ID!
//   user: User
// }
