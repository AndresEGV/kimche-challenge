import React from "react";

const CountryFind = ({ country, continent }) => {
  return (
    <div>
      {country.length === 0 ? (
        <div className="w-11/12"></div>
      ) : (
        <div className="mt-20 flex flex-wrap justify-center align-center m-auto ">
          {country.map((country) => (
            <div className="" key={country.code}>
              <div className="w-80 h-80 p-10 m-10 border-solid border-2 rounded-2xl bg-gray-100 text-blue-900 box-border text-xl">
                {continent === true ? (
                  <h2 className="font-bold">
                    {country.continent.name}
                    <hr />
                  </h2>
                ) : (
                  <h2>
                    {country.languages.map((lang) => (
                      <p className="font-bold" key={lang.name}>
                        {lang.name}
                      </p>
                    ))}
                    <hr />
                  </h2>
                )}
                <div>
                  <h3>
                    {country.emoji} {country.name}
                  </h3>
                  <h4>{country.native}</h4>
                  {continent === true ? (
                    <ul>
                      <span className="font-bold">Languages:</span>
                      {country.languages.map((len) => (
                        <li key={len.name}>{len.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>
                      <span className="font-bold">Continent: </span>

                      <span>{country.continent.name}</span>
                    </p>
                  )}
                  <hr />
                  <p>
                    <span className="font-bold">Capital: </span>
                    <span>{country.capital}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryFind;
