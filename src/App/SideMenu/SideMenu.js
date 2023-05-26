import React, { useState, useRef } from "react";
import SideMenuIcon from "./SideMenuIcon";
import { SideMenuSearch, SideIconSearch } from "./SideMenuSearch";

import "./SideMenu.scss";

function SideMenu() {
  const sideMenuRef = useRef();
  const [hideState, setHideState] = useState(false);

  const hide = () => {
    setHideState((hideState) => !hideState);
    sideMenuRef.current.className = "side-menu " + (hideState ? "" : "hide");
  };

  return (
    <menu ref={sideMenuRef} className="side-menu">
      <nav className="side-menu-nav">
        <SideIconSearch />
        <SideMenuIcon onClick={hide} selected={hideState ? true : false}>
          {hideState ? ">" : "<"}
        </SideMenuIcon>
      </nav>
      <SideMenuSearch />
    </menu>
  );
}

export default SideMenu;
