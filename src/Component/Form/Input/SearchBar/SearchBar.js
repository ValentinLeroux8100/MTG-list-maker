import React, { forwardRef } from "react";
import searchIcon from "Graphics/Search Icon.svg";
import "./SearchBar.scss";

const SearchBar = forwardRef(function SearchBar({ ...props }, ref) {
  return (
    <div className="search-bar">
      <input ref={ref} {...props} />
      <img src={searchIcon}></img>
    </div>
  );
});

export { SearchBar };
