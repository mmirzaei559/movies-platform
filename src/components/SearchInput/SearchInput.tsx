import React from "react";
import "../../styles/SearchInput.scss";
interface Props {
    value: string,
    onChange: any
}

export const SearchInput: React.FC<Props> = ({ value,onChange }) => {
  return (
      <div className="search-box-container">
          <input
              data-testid="searchMovies"
              onChange={onChange}
              value={value}
              type="text"
              placeholder="Search Movies..."/>
              <div className="search"></div>
      </div>
  );
};

// <div className="search-box">
//     <input onChange={onChange} value={value} type="text" placeholder=" "/>
//     <button type="reset"></button>
// </div>
