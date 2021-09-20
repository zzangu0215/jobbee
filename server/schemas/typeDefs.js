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
    linkedIn: String
    resumeLink: String
    likedBy: [Employer!]!
  }

  type Employer {
    _id: ID
    name: String
    email: String
    password: String
    companyName: String
    likedDevelopers: [Developer]
    jobs: [Job]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User

    addJobb(listingName: String!, description: String!, website: String!): Job

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

    addDevLike(developerId: ID!): Employer

    addLinkedIn(developerId: ID!, linkedIn: String): Developer

    addResumeLink(developerId: ID!, resumeLink: String): Developer

    applyMessage(employerId: ID!, jobID: ID, message: String!): Developer
  }

  type Query {
    User: [User]
    me: User
    Jobs: [Job]
    aJob(companyName: String!): Job
    Developers: [Developer]
    Developer: User
    Employer: User
    aEmployer(_id: ID!): Employer
    EmpLikedList: User
    employerJobs(_id: ID!): Employer
  }
`;

module.exports = typeDefs;

// addDevToEmployerList(employerId: ID!, developerId: ID!): Auth
