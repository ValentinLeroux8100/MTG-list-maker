import React from 'react'

function SideMenuIcon({selected, children}) {
  return (
    <li>
        <a className={'side-menu-nav-button ' + (selected?"selected":"")}>{children}</a>
    </li>
  )
}

export default SideMenuIcon