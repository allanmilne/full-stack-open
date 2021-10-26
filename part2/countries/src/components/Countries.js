import React from "react";

const Countries = ({ countries }) => {
  if (countries.length > 1 && countries.length < 10) {
    return (
      <div>
        <h3>Countries</h3>
        {countries.map((country, i) => {
          return <div key={i}>{country.name}</div>;
        })}
      </div>
    );
  }

  if (countries.length === 1) {
    return (
      <div>
        {countries.map((country, i) => {
          return (
            <div key={i}>
              <h3> {country.name}</h3>
              Capital: {country.capital}
              <br />
              Population: {country.population}
              <h4> Languages </h4>
              <ul>
                {country.languages.map((language, i) => {
                  return <li key={i}>{language.name}</li>;
                })}
              </ul>
              <div>
                <img
                  src={country.flag}
                  alt="country flag"
                  width="25%"
                  height="25%"
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <p>Too many matches, specify another filter</p>
    </div>
  );
};

export default Countries;
