import React, { useState } from 'react';

const SearchBar = (props) => {
  const { onFormSubmit } = props;
  const [term, setTerm] = useState('');

  return (
    <div className="ui segment">
      <form
        action=""
        className="ui form"
        onSubmit={(e) => onFormSubmit(e, term)}
      >
        <div className="field">
          <label htmlFor="">Image Search</label>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
