import React from 'react';

function Filter({ filter, filterChang }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        onChange={filterChang}
        name="filter"
        value={filter}
        required
      />
    </label>
  );
}

export default Filter;
