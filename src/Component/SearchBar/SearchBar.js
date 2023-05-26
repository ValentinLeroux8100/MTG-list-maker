import { forwardRef } from "react";
import searchIcon from "graphics/Search Icon.svg";
import './SearchBar.scss'

const SearchBar = forwardRef(function SearchBar({onChange, Children}, ref){
    return(
        <div className='search-bar'>
            <input ref={ref} placeholder={Children} onChange={onChange}/>
            <img src={searchIcon}></img>
        </div>
    )
})

export default SearchBar