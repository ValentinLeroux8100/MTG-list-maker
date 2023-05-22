import React, {useState, useRef, useEffect, useDeferredValue} from 'react'
import SideMenuIcon from './SideMenuIcon';
import SearchBar from "Component/SearchBar/SearchBar";
import SelectBoxInput from 'Component/SelectBoxInput/SelectBoxInput';

import "./SideMenu.scss"

function SideMenu() {
  const sideMenuRef = useRef();

  const [hideState, setHideState] = useState(false)

  const panel = [{name: "Search"}]

  const [selectedPanelId, setSelectedPanelId] = useState(0)
  const [searchValue, setSearchValue] = useState("")

  const sortOption = [
    "Name", "Set", "Released", "Rarity", "Color", "Usd", "Tix", 
    "Eur", "Cmc", "Power", "Toughness", "Edhrec", "Penny", "Artist", "Review"]

  const orderOption = ["Auto", "Asc", "Desc"]
    
  const hide = () => {
    setHideState((hideState) => (!hideState))
    
    sideMenuRef.current.className = 'side-menu ' + (hideState?"":"hide")
  }

  const select = (panelId) => {
    setSelectedPanelId(() => panelId)
  }

  const insertInData = (json) => {

  }

  const searchCards = (request) => {
    if(request != ""){
      fetch("https://api.scryfall.com/cards/search?q="+request)
        .then(result => result.json())
        .then(json => setSearchResult(json))
      
      
    }
  }

  const updateSearchCard = useEffect(() => {
    const timer = setTimeout(() => {
      searchCards(searchValue)
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchValue])

  const requestCard = (event) =>{
    setSearchValue(() => (event.target.value))
  }

  return (
    <menu ref={sideMenuRef} className='side-menu'>
      <nav className='side-menu-nav'>  
        <SideMenuIcon selected={true}>Search</SideMenuIcon>
        <SideMenuIcon  
          onClick={hide} 
          selected={hideState?true:false}
        > 
          {hideState?">":"<"} 
        </SideMenuIcon>   
       </nav>
      <div className='side-menu-panel'>
        <div className='side-menu-panel-search-bar'>
          <SearchBar onChange={requestCard}>Enter here your search</SearchBar>
        </div>
        <div className='side-menu-panel-sub-menu'>
          <SelectBoxInput name="sort" id="sort" isMultiple={false} option={sortOption}></SelectBoxInput>
          <SelectBoxInput name="order" id="order" isMultiple={false} option={orderOption}></SelectBoxInput>
        </div>
      </div>
    </menu>
  )
}

export default SideMenu