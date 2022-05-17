import React from "react";
import SearchBar from "../components/SearchBar";
import COUNTRIES from "../graphql/countries";
import { useQuery } from "@apollo/react-hooks";

const Header = () => {
  const { data, loading } = useQuery(COUNTRIES);

  return (
    <div>
      <h1>Country Search</h1>
      <h2>Search by characters or words</h2>
      {loading ? <p>loading..</p> : <SearchBar countries={data?.countries} />}
    </div>
  );
};

export default Header;
