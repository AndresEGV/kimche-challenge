import React, { useState } from "react";

const SearchBar = ({ countries }) => {
  console.log(countries);
  const [countryInputText, setCountryInputText] = useState("");
  const handleChangeText = (e) => {
    setCountryInputText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={countryInputText} onChange={handleChangeText} />
    </div>
  );
};

export default SearchBar;
