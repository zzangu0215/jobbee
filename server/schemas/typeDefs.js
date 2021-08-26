const { gql } = require("apollo-server-express");

const typeDefs = gql`
  interface User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Job {
    _id: ID
    listingName: String
    description: String
    createdAt: String
    companyName: String
    website: String
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
    companyName: String
    likedDevelopers: [User]
    jobs: [Job]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    addJob(listingName: String!, description: String!, website: String!): Auth
    addDeveloper(
      name: String!
      email: String!
      password: String!
      githubName: String!
    ): Auth
    addEmployer(
      name: String!
      email: String!
      password: String!
      companyName: String!
    ): Auth
    userlogin(email: String!, password: String!): Auth
    updateJob(_id: ID, listingName: String!, description: String!): Job
    removeJob(_id: ID): Job
  }

  type Query {
    User: [User]
    aUser(_id: ID!): Developer
    Job: [Job]
    aJob(companyName: String!): Job
    Developer: [Developer]
    aDeveloper(_id: ID!): Developer
    Employer: [Employer]
    aEmployer(_id: ID!): Employer
  }
`;

module.exports = typeDefs;
