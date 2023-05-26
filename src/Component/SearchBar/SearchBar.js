import React, { forwardRef } from "react";
import PropTypes from 'prop-types';
import searchIcon from "graphics/Search Icon.svg";
import './SearchBar.scss'

const SearchBar = forwardRef(function SearchBar({onChange, children}, ref){
    return(
        <div className='search-bar'>
            <input ref={ref} placeholder={children} onChange={onChange}/>
            <img src={searchIcon}></img>
        </div>
    )
})

SearchBar.propTypes = {
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
}

export default SearchBar