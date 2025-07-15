import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products {
    products(
      first: 5
      channel: "online-inr"
      filter: {
        attributes: [
          { slug: "shape", values: ["round"] }
          { slug: "size", values: ["3"] }
        ]
      }
    ) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
