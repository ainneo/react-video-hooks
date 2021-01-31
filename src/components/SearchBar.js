import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {

  const [input, setInput] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(input);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            onSubmit={onSubmit} //event handeler
            type="text"  // defines a one-line text input field
            value={input} // value="" - our search vaule
            onChange={(event) => setInput(event.target.value)} //update the state
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



