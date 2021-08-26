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

export const QUERY_JOBS = gql`
  query Jobs {
    Jobs {
      listingName
      description
      createdAt
      companyName
      website
    }
  }
`;
