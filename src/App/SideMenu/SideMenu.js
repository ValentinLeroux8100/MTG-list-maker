import React, { useState, useRef } from "react";
import SideMenuIcon from "./SideMenuIcon";
import { SideMenuSearch, SideIconSearch } from "./SideMenuPanel/SideMenuSearch";
import { SideMenuSave, SideIconSave } from "./SideMenuPanel/SideMenuSave";

import "./SideMenu.scss";

function SideMenu() {
  const sideMenuRef = useRef();
  const [hideState, setHideState] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(true);

  const hide = () => {
    setHideState((hideState) => !hideState);
    sideMenuRef.current.className = "side-menu " + (hideState ? "" : "hide");
  };

  const test = () => {
    setSelectedMenu((value) => !value);
  };

  return (
    <menu ref={sideMenuRef} className="side-menu">
      <nav className="side-menu-nav">
        <SideIconSearch onClick={test} selected={selectedMenu} />
        <SideIconSave onClick={test} selected={!selectedMenu} />
        <SideMenuIcon onClick={hide} selected={hideState ? true : false}>
          {hideState ? ">" : "<"}
        </SideMenuIcon>
      </nav>
      <div className="side-menu-container">
        <SideMenuSearch isVisible={selectedMenu} />
        <SideMenuSave isVisible={!selectedMenu} />
      </div>
    </menu>
  );
}

export default SideMenu;
