import React, {useState, useRef} from 'react'

function SideMenu() {

  const sideMenuRef = useRef();
  const hideButtonRef = useRef();

  const [hideState, setHideState] = useState(false);

  const hide = () => {
    setHideState((hideState) => (!hideState))
    console.log(hideState);
    sideMenuRef.current.className = 'side-menu ' + (hideState?"":"hide")
    hideButtonRef.current.className ='side-menu-nav-button ' + (hideState?"":"selected")
  }

  return (
    <menu ref={sideMenuRef} className='side-menu'>
      <nav className='side-menu-nav'>
        <li><a className='side-menu-nav-button'>search</a></li>
        <li><a className='side-menu-nav-button'>search</a></li>
        <li><a className='side-menu-nav-button selected'>search</a></li>
        <li><a className='side-menu-nav-button'>search</a></li>
        <li onClick={hide}><a ref={hideButtonRef} className='side-menu-nav-button'> {hideState?">":"<"} </a></li>
      </nav>
      <div style={{height:100+"%", backgroundColor:"#444"}}></div>
    </menu>
  )
}

export default SideMenu