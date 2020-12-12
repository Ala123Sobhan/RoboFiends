import React from "react";

const SearchBox = ({searchChange}) => {
  
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--blue bg-lightest-grey"
        style={{
          width:"80%"
        }}
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
