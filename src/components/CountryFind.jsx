import React from "react";

const CountryFind = ({ country, continent }) => {
  return (
    <div>
      {country.length === 0 ? (
        <p></p>
      ) : (
        <div className="card-container">
          {country.map((country) => (
            <div className="" key={country.code}>
              <div className="card-container-box">
                {continent === true ? (
                  <h2>
                    {country.continent.name}
                    <hr />
                  </h2>
                ) : (
                  <h2>
                    {country.languages.map((lang) => (
                      <p key={lang.name}>{lang.name}</p>
                    ))}
                  </h2>
                )}
                <div>
                  <h3>
                    {country.emoji} {country.name}
                  </h3>
                  <h4>{country.native}</h4>
                  {continent === true ? (
                    <ul>
                      <span>Languages:</span>
                      {country.languages.map((len) => (
                        <li key={len.name}>{len.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>
                      Continent:
                      <span>{country.continent.name}</span>
                    </p>
                  )}
                  <p>
                    Capital: <span>{country.capital}</span>
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
