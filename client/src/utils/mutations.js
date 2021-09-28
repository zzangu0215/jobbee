import { gql } from "@apollo/client";

export const POST_JOB = gql`
  mutation addJobb(
    $listingName: String!
    $description: String!
    $website: String!
  ) {
    addJobb(
      listingName: $listingName
      description: $description
      website: $website
    ) {
      _id
      listingName
      description
      website
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
      user {
        __typename
        ... on Employer {
          companyName
        }
        ... on Developer {
          githubName
        }
      }
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation updateJob($_id: ID!, $listingName: String!, $description: String!) {
    updateJob(_id: $_id, listingName: $listingName, description: $description) {
      _id
      listingName
      description
    }
  }
`;

export const REMOVE_JOB = gql`
  mutation removeJob($_id: ID!) {
    removeJob(_id: $_id) {
      _id
    }
  }
`;

export const ADD_DEV_LIKE = gql`
  mutation addDevLike($developerId: ID!) {
    addDevLike(developerId: $developerId) {
      _id
    }
  }
`;

export const REMOVE_DEV_LIKE = gql`
  mutation removeLike($developerId: ID!) {
    removeLike(developerId: $developerId) {
      _id
    }
  }
`;

export const APPLY_MESSAGE = gql`
  mutation applyMessage($employerId: ID!, $jobID: ID!, $message: String!) {
    applyMessage(employerId: $employerId, jobID: $jobID, message: $message) {
      _id
      name
    }
  }
`;

export const UPDATE_LINKEDIN = gql`
  mutation addLinkedIn($developerId: ID!, $linkedIn: String) {
    addLinkedIn(developerId: $developerId, linkedIn: $linkedIn) {
      githubName
      linkedIn
    }
  }
`;

export const UPDATE_RESUME = gql`
  mutation addResumeLink($developerId: ID!, $resumeLink: String) {
    addResumeLink(developerId: $developerId, resumeLink: $resumeLink) {
      githubName
      resumeLink
    }
  }
`;
