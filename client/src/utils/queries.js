import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query getMe {
    me {
      __typename
      ... on Developer {
        _id
        githubName
        name
      }
      ... on Employer {
        _id
        companyName
        name
      }
    }
  }
`;

export const QUERY_JOBS = gql`
  query Jobs {
    Jobs {
      _id
      listingName
      description
      createdAt
      companyName
      website
    }
  }
`;

export const QUERY_DEVELOPER = gql`
  query Developer($_id: ID!) {
    Developer(_id: $_id) {
      _id
      likedBy {
        __typename
        ... on Employer {
          _id
        }
      }
    }
  }
`;

export const QUERY_DEVELOPERS = gql`
  query Developers {
    Developers {
      _id
      githubName
      name
    }
  }
`;

export const QUERY_EMPLOYER = gql`
  query Employer($_id: ID!) {
    Employer(_id: $_id) {
      _id
      likedDevelopers {
        __typename
        ... on Developer {
          _id
        }
      }
    }
  }
`;
