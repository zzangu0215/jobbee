import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query getMe {
    me {
      __typename
      ... on Developer {
        _id
        githubName
        name
        linkedIn
        resumeLink
        likedBy {
          _id
        }
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
  query Developer {
    Developer {
      __typename
      ... on Developer {
        _id
        likedBy {
          _id
          name
          companyName
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
      linkedIn
    }
  }
`;

export const QUERY_EMPLOYER = gql`
  query Employer {
    Employer {
      __typename
      ... on Employer {
        _id
        companyName
        jobs {
          _id
          createdAt
          listingName
          website
          description
        }
      }
    }
  }
`;

export const QUERY_EMPLIKEDLIST = gql`
  query EmpLikedList {
    EmpLikedList {
      __typename
      ... on Employer {
        _id
        likedDevelopers {
          _id
          name
          githubName
        }
      }
    }
  }
`;
