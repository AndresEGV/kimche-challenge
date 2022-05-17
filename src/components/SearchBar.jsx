import React, { useState } from "react";
import countries from "../graphql/countries";

const SearchBar = () => {
  const [country, setCountry] = useState("");
  const handleChangeText = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleChangeText(e)} />
    </div>
  );
};

export default SearchBar;
