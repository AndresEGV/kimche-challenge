import gql from "graphql-tag";

const COUNTRIES = gql`
  query {
    countries {
      name
      code
      native
      capital
      continent {
        name
      }
      languages {
        code
        name
        native
      }
      emoji
      emojiU
      states {
        name
      }
    }
  }
`;

export default COUNTRIES;
