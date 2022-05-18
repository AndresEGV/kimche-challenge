import React, { useState, useEffect } from "react";
import CountryFind from "../components/CountryFind";
import { lowerCase } from "../utils/lowerCase";
const SearchBar = ({ countries }) => {
  const [countrySearch, setCountrySearch] = useState([]);
  const [countryInput, setCountryInput] = useState([]);
  const [continent, setContinent] = useState(null);
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    if (continent === null) {
      setContinent(true);
    }
  }, []);

  const handleChange = (e) => {
    setCountryInput(e.target.value);
    filterCountry(e.target.value);
  };

  const filterCountry = (searchInput) => {
    let result = countries.filter((country) => {
      if (
        lowerCase(country.name).startsWith(lowerCase(searchInput)) &&
        lowerCase(country.name).includes(lowerCase(searchInput))
      ) {
        return country;
      }
    });
    setCountrySearch(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const showContinent = () => {
    setContinent(true);
    setLanguage(null);
  };

  const showLanguage = () => {
    setLanguage(true);
    setContinent(null);
  };

  return (
    <div>
      <div className="w-80 m-auto text-center" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className=" mt-6 pl-10 p-2 shadow-md rounded-md w-1/3"
            placeholder="Search"
            value={countryInput}
            onChange={handleChange}
            autoFocus
          />
        </div>
      </div>

      <div>
        <div className="w-80 m-auto flex flex-wrap justify-center items-center mt-16">
          <h2 className="font-bold text-2xl mr-3">Group By: </h2>
          <div className="">
            <button
              type="button"
              className="px-2 py-3 bg-indigo-900 mr-2 rounded-2xl text-white hover:bg-purple-700"
              onClick={showContinent}
            >
              Continent
            </button>
          </div>
          <div>
            <button
              className="px-2 py-3 bg-indigo-900 rounded-2xl text-white hover:bg-purple-700"
              type="button"
              onClick={showLanguage}
            >
              Language
            </button>
          </div>
        </div>
      </div>
      <div>
        <CountryFind
          country={countrySearch}
          continent={continent}
          language={language}
        />
      </div>
    </div>
  );
};

export default SearchBar;
