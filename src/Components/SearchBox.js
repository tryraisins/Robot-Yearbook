import React from "react";

const SearchBox = ({ CollectText }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robot...'
        onChange={CollectText}
      ></input>
    </div>
  );
};

export default SearchBox;
