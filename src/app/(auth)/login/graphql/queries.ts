import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation CreateToken($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      user {
        email
        isStaff
        userPermissions {
          code
        }
      }
      errors {
        field
        message
      }
    }
  }
`;
