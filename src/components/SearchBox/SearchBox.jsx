import { useId } from "react";

import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onFilter }) => {
  const filterFieldId = useId();

  return (
    <div className="sub-card">
      <div className={css.searchContainer}>
        <h2>Search for someone</h2>
        <label htmlFor={filterFieldId}>Find contacts by name</label>
        <input
          type="text"
          name="filter"
          id={filterFieldId}
          value={value}
          placeholder="Enter search prompt..."
          onChange={(e) => onFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
