import React from "react";

const Filter = ({ searchTerm, handleSearchTermChange }) => {
  return (
    <div>
      Find countries{" "}
      <input
        placeholder={"Search for countries..."}
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
};

export default Filter;
