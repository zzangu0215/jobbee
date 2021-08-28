const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Job {
    _id: ID
    listingName: String
    description: String
    createdAt: String
    companyName: String
    website: String
  }

  union User = Developer | Employer

  type Developer {
    _id: ID
    name: String
    email: String
    password: String
    githubName: String
    likedBy: [Employer]
  }

  type Employer {
    _id: ID
    name: String
    email: String
    password: String
    companyName: String
    likedDevelopers: [Developer]
    jobs: [Job!]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    sendMessage(message: String!): Auth
    addUser(name: String!, email: String!, password: String!): User

    addJob(
      listingName: String!
      description: String!
      website: String!
      companyName: String!
    ): Auth
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
    updateJob(_id: ID!, listingName: String!, description: String!): Job

    removeJob(_id: ID): Job
    addDevLike(employerId: ID!, developerId: ID!): Employer
  }

  type Query {
    User: [User]
    me: User
    likedByEmployers(developerId: ID!): Developer
    Jobs: [Job]
    aJob(companyName: String!): Job
    Developers: [Developer]
    Developer(_id: ID!): Developer
    Employer(_id: ID!): Employer
    aEmployer(_id: ID!): Employer
    employerJobs(_id: ID!): Employer
  }
`;

module.exports = typeDefs;

// addDevToEmployerList(employerId: ID!, developerId: ID!): Auth
