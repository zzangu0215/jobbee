import { gql } from "@apollo/client";

export const QUERY_ADEVELOPER = gql`
  query aDeveloper($_id: ID!) {
    aDeveloper(_id: $_id) {
      githubName
    }
  }
`;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       thoughts {
//         _id
//         thoughtText
//         thoughtAuthor
//         createdAt
//       }
//     }
//   }
// `;
