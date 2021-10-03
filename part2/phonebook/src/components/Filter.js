import React from "react";

const Filter = ({ searchTerm, handleSearchTermChange }) => {
  return (
    <div>
      Filter contacts:{" "}
      <input
        placeholder={"Search for contacts..."}
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
};

export default Filter;
