import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import COUNTRIES from "../graphql/countries";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const { data, error, loading } = useQuery(COUNTRIES, {
    variables: { searchText },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error...${error.message}`</p>;

  return (
    <div>
      <p>Search conuntry</p>
      <input onChange={(e) => setSearchText(e.target.value)} />
      <div className="result_container">
        <p>Continent</p>
        {data.countries.map((country) => (
          <div key={country.code}>
            <div className="info_container">
              <div>
                <span>{country.emoji}</span>
                <p>{country.name}</p>
              </div>
              <p>{country.capital}</p>
              <p>{country.currency}</p>

              {country.languages.map((lan) => (
                <p>{lan.name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
