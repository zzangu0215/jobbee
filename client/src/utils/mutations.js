import { gql } from "@apollo/client";

export const ADD_JOB = gql`
  mutation addJob(
    $listingName: String!
    $description: String!
    $createdAt: String!
    $companyName: String!
  ) {
    addJob(
      listingName: $listingName
      description: $description
      createdAt: $createdAt
      companyName: $companyName
    ) {
      listingName
      description
      createdAt
      companyName
    }
  }
`;

export const ADD_DEVELOPER = gql`
  mutation addDeveloper(
    $name: String!
    $email: String!
    $password: String!
    $githubName: String!
  ) {
    addDeveloper(
      name: $name
      email: $email
      password: $password
      githubName: $githubName
    ) {
      token
    }
  }
`;

export const ADD_EMPLOYER = gql`
  mutation addEmployer(
    $name: String!
    $email: String!
    $password: String!
    $companyName: String!
  ) {
    addEmployer(
      name: $name
      email: $email
      password: $password
      companyName: $companyName
    ) {
      token
    }
  }
`;

export const USER_LOGIN = gql`
  mutation userlogin($email: String!, $password: String!) {
    userlogin(email: $email, password: $password) {
      token
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation updateJob($_id: ID, $listingName: String!, $description: String!) {
    updateJob(_id: $_id, listingName: $listingName, description: $description) {
      _id
      listingName
      description
    }
  }
`;

export const REMOVE_JOB = gql`
  mutation removeJob($_id: ID) {
    userlogin(_id: $_id) {
      _id
    }
  }
`;
