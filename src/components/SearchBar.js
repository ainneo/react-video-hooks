import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;


//1. state - input values

//2. eventHandeler - onSubmit
       //1. prevent default -  resets/clears input box
       //2. pass input into function call - passes the input/updates the parent component
//** clear out input - prevent default
//** take input values and pass into parent component - state and setState

//3. eventHandeler - onChange
  //update the input state -s etInput to input



