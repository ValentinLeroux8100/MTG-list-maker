import React from 'react'

function SideMenuIcon({selected, onClick, children}) {
  return (
    <li>
        <a onClick={onClick} className={'side-menu-nav-button ' + (selected?"selected":"")}>{children}</a>
    </li>
  )
}

export default SideMenuIcon