import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query getMe {
    me {
      __typename
      ... on Developer {
        githubName
        name
      }
    }
  }
`;

export const QUERY_JOB = gql`
  query Job {
    Job {
      listingName
      description
      createdAt
      companyName
      website
    }
  }
`;
