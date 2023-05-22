import searchIcon from "graphics/Search Icon.svg";
import './SearchBar.scss'

function SearchBar({onChange, Children}){
    return(
        <div className='search-bar'>
            <input placeholder={Children} onChange={onChange}/>
            <img src={searchIcon}></img>
        </div>
    )
}

export default SearchBar