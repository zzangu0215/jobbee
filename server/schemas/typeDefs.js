const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Application {
    _id: ID
    companyName: String
    listingName: String
    message: String
    createdAt: String
  }

  type Job {
    _id: ID
    listingName: String
    description: String
    createdAt: String
    companyName: String
    website: String
    poster: String
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
    likedBy: [Employer]
    appliedJobs: [Job]
  }

  type Employer {
    _id: ID
    name: String
    email: String
    password: String
    companyName: String
    likedDevelopers: [Developer]
    jobs: [Job]
    messages: [Application]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User

    addJobb(listingName: String!, description: String!, website: String!): Job

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

    removeLike(developerId: ID!): Employer

    addLinkedIn(developerId: ID!, linkedIn: String): Developer

    addResumeLink(developerId: ID!, resumeLink: String): Developer

    applyMessage(employerId: ID!, jobID: ID, message: String!): Developer

    jobApply(employerId: ID!, jobID: ID!, message: String!): Application
  }

  type Query {
    User: [User]
    me: User
    Jobs: [Job]
    Job(_id: ID!): Job
    Developers: [Developer]
    Developer: Developer
    Employer: User
    EmpLikedList: User
    employerJobs(_id: ID!): Employer
  }
`;

module.exports = typeDefs;
