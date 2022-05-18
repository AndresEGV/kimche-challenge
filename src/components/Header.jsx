import React from "react";
import SearchBar from "../components/SearchBar";
import COUNTRIES from "../graphql/countries";
import { useQuery } from "@apollo/react-hooks";

const Header = () => {
  const { data, loading } = useQuery(COUNTRIES);

  return (
    <div className="text-center h-screen">
      <h1 className="text-4xl font-bold mb-10">Country Search</h1>

      {loading ? <p>loading..</p> : <SearchBar countries={data?.countries} />}
    </div>
  );
};

export default Header;
