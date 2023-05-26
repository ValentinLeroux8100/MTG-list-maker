import React, {useState, useRef, useEffect, useContext} from 'react'
import SideMenuIcon from './SideMenuIcon';
import SearchBar from "Component/SearchBar/SearchBar";
import SelectBoxInput from 'Component/SelectBoxInput/SelectBoxInput';
import { DataContext } from "App/App"

import "./SideMenu.scss"
import CardList from 'Component/Card/CardList';

function SideMenu() {
  const sideMenuRef = useRef();
  const [hideState, setHideState] = useState(false)
  
  const searchBar = useRef()
  const searchSort = useRef()
  const searchOrder = useRef()

  const [searchValue, setSearchValue] = useState("")
  const [sortValue, setSortValue] = useState("")
  const [orderValue, setOrderValue] = useState("")

    
  const hide = () => {
    setHideState((hideState) => (!hideState))
    
    sideMenuRef.current.className = 'side-menu ' + (hideState?"":"hide")
  }

  const [resultCard, setResultCard] = useState([])
  const data = useContext(DataContext)

  useEffect(() => {
    const sortOption = [
      "Name", "Set", "Released", "Rarity", "Color", "Usd", "Tix", 
      "Eur", "Cmc", "Power", "Toughness", "Edhrec", "Penny", "Artist", "Review"]

    const orderOption = ["Auto", "Asc", "Desc"]
    
    const searchCards = (request) => {
      const sort = sortOption[sortValue]?.toLowerCase();
      const order = orderOption[orderValue]?.toLowerCase();

      if(request != ""){
        fetch(
          "https://api.scryfall.com/cards/search"+
            "?order="+sort+
            "&dir="+order+
            "&q="+request)
          .then(result => result.json())
          .then(json => updateCardData(json))
      }
    }

    const updateCardData = (result) => {
      setResultCard([])

      result.data?.map((element) => {

        const cardData = {
          [element.id]: {
            ...element,
          }
        }

        data.dispatch({type:"addCardData", cardData: cardData})

        const newCard = {id: element.id, cardId: element.id, count: 2} 

        setResultCard((prevState) => [...prevState, newCard])
      })
    }

    const timer = setTimeout(() => { searchCards(searchValue) }, 2000);
    return () => clearTimeout(timer);

  }, [searchValue, sortValue, orderValue])

  const requestCard = (event) =>{
    setSearchValue(() => (event.target.value))
  }
  const changeSort = (event) =>{
    setSortValue(() => (event.target.selectedIndex))
  }
  const changeOrder = (event) =>{
    setOrderValue(() => (event.target.selectedIndex))
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
        <div className='side-menu-panel-header'>
          <div className='side-menu-panel-search-bar'>
            <SearchBar ref={searchBar} onChange={requestCard}>Enter here your search</SearchBar>
          </div>
          <div className='side-menu-panel-sub-menu'>
            <SelectBoxInput ref={searchSort} onChange={changeSort} name="sort" id="sort" isMultiple={false} option={sortOption}></SelectBoxInput>
            <SelectBoxInput ref={searchOrder} onChange={changeOrder} name="order" id="order" isMultiple={false} option={orderOption}></SelectBoxInput>
          </div>
        </div>
        <CardList id={"search"} cards={resultCard} displayCount={false} isDropDisable={true}></CardList>
      </div>
    </menu>
  )
}

export default SideMenu