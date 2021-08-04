import React from 'react';

function FilterButton(props) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">show</span>
      <span>all</span>
      <span className="visually-hidden">tasks</span>
    </button>
  );
}

export default FilterButton;