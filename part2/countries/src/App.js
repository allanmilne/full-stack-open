import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const request = axios.get(
      `https://restcountries.com/v2/all?fields=name,capital,population,languages,flag`
    );

    request.then((response) => setCountries(response.data));
  }, []);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });

  return (
    <div>
      <div>
        <h3>Filter</h3>
        <Filter
          searchTerm={searchTerm}
          handleSearchTermChange={handleSearchTermChange}
        />
      </div>
      {searchTerm && (
        <div>
          <Countries countries={filteredCountries} />
        </div>
      )}
    </div>
  );
};

export default App;
