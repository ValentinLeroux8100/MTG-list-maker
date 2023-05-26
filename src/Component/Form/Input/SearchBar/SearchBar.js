import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import searchIcon from "graphics/Search Icon.svg";
import "./SearchBar.scss";

const SearchBar = forwardRef(function SearchBar({ children, ...props }, ref) {
  return (
    <div className="search-bar">
      <input ref={ref} {...props} placeholder={children} />
      <img src={searchIcon}></img>
    </div>
  );
});

SearchBar.propTypes = {
  children: PropTypes.string,
};

export { SearchBar };
