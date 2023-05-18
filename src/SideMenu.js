import React, {useState, useRef} from 'react'
import SideMenuIcon from './SideMenuIcon';
import SideMenuPanel from './SideMenuPanel';
import searchIcon from "./Graphics/Search Icon.svg";

function SideMenu() {

  const sideMenuRef = useRef();
  const hideButtonRef = useRef();

  const [hideState, setHideState] = useState(false);
  const panel = [{name: "Search"}]
  const [selectedPanelId, setSelectedPanelId] = useState(0)

  const hide = () => {
    setHideState((hideState) => (!hideState))
    
    sideMenuRef.current.className = 'side-menu ' + (hideState?"":"hide")
    hideButtonRef.current.className ='side-menu-nav-button ' + (hideState?"":"selected")
  }

  const select = (panelId) => {
    setSelectedPanelId(() => panelId)
  }

  return (
    <menu ref={sideMenuRef} className='side-menu'>
      <nav className='side-menu-nav'>

        <SideMenuIcon selected={true}>Search</SideMenuIcon>
        <li onClick={hide}><a ref={hideButtonRef} className='side-menu-nav-button'> {hideState?">":"<"} </a></li>
      
      </nav>
      <div className='side-menu-panel'>
        <div  className='side-menu-panel-search-bar'>
          <input placeholder='Enter here your search'/>
          <img src={searchIcon}></img>
        </div>
      </div>
    </menu>
  )
}

export default SideMenu