import React, { useState, useEffect } from "react";
import CountryFind from "../components/CountryFind";
import { lowerCase } from "../utils/lowerCase";
const SearchBar = ({ countries }) => {
  const [countryInputText, setCountryInputText] = useState("");
  const [continent, setContinent] = useState(null);
  const [countryFind, setCountryFind] = useState([]);
  const [language, setLanguage] = useState(null);
  useEffect(() => {
    if (continent === null) {
      setContinent(true);
    }
  }, [continent]);

  const handleChangeText = (e) => {
    setCountryInputText(e.target.value);
    countryFilter(e.target.value);
  };

  const countryFilter = (inputSearchBar) => {
    let response = countries.filter((country) => {
      if (
        lowerCase(country.name).startsWith(lowerCase(inputSearchBar)) &&
        lowerCase(country.name).includes(lowerCase(inputSearchBar))
      ) {
        return country;
      }
    });
    setCountryFind(response);
  };

  const showContinentGroup = () => {
    setContinent(true);
    setLanguage(null);
  };

  const showLanguageGroup = () => {
    setLanguage(true);
    setContinent(null);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={countryInputText}
          onChange={handleChangeText}
          placeholder="Search any country"
          autoFocus
        />
      </div>
      <div>
        <div>
          <h2>Group By: </h2>
          <div>
            <button
              type="button"
              className="container-button"
              onClick={showContinentGroup}
            >
              Continent
            </button>
          </div>
          <div>
            <button type="button" onClick={showLanguageGroup}>
              Language
            </button>
          </div>
        </div>
      </div>
      <div>
        <CountryFind
          country={countryFind}
          continent={continent}
          language={language}
        />
      </div>
    </>
  );
};

export default SearchBar;
