import gql from "graphql-tag";

const COUNTRIES = gql`
  query continents {
    countries {
      code
      name
      continent {
        name
      }
      languages {
        code
        name
        native
      }
      phone
      capital
      currency
      emoji
    }
  }
`;

export default COUNTRIES;
