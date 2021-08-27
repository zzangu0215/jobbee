import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query getMe {
    me {
      __typename
      ... on Developer {
        githubName
        name
      }
      ... on Employer {
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

export const QUERY_DEVELOPERS = gql`
  query Developers {
    Developers {
      _id
      githubName
      name
    }
  }
`;
