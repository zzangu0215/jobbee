import { gql } from "@apollo/client";

export const QUERY_ADEVELOPER = gql`
  query aDeveloper($_id: ID!) {
    aDeveloper(_id: $_id) {
      githubName
    }
  }
`;

export const QUERY_JOB = gql`
  query Job  {
    Job {
      listingName
      description
      createdAt
      companyName
      website
    }
  }
`;
