import React, { useState, useRef } from "react";
import SideMenuIcon from "./SideMenuIcon";
import { SideMenuSearch, SideIconSearch } from "./SideMenuPanel/SideMenuSearch";
import { SideMenuSave, SideIconSave } from "./SideMenuPanel/SideMenuSave";

import "./SideMenu.scss";

function SideMenu() {
  const sideMenuRef = useRef();
  const [hideState, setHideState] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);

  const hide = () => {
    setHideState((hideState) => !hideState);
    sideMenuRef.current.className = "side-menu " + (hideState ? "" : "hide");
  };

  const test = (event) => {
    console.log(event);
    setSelectedMenu((value) => (value + 1) % 4);
  };

  const t = [
    { icon: SideIconSearch, panel: SideMenuSearch },
    { icon: SideIconSave, panel: SideMenuSave },
    { icon: SideIconSave, panel: SideMenuSave },
    { icon: SideIconSave, panel: SideMenuSave },
  ];

  const selected = 0;

  return (
    <aside ref={sideMenuRef} className="side-menu">
      <div className={"side-menu-hide "}>
        <button onClick={hide}>{!hideState ? ">" : "<"}</button>
      </div>
      <menu className={"side-menu-nav " + (!hideState ? "" : "hide")}>
        <SideIconSearch onClick={test} selected={selectedMenu == 0} />
        <SideIconSave onClick={test} selected={selectedMenu == 1} />
        <SideIconSave onClick={test} selected={selectedMenu == 2} />
        <SideIconSave onClick={test} selected={selectedMenu == 3} />
      </menu>
      <menu className={"side-menu-container " + (!hideState ? "" : "hide")}>
        <SideMenuSearch isVisible={selectedMenu == 0} />
        <SideMenuSave isVisible={selectedMenu == 1} />
        <SideMenuSave isVisible={selectedMenu == 2} />
        <SideMenuSave isVisible={selectedMenu == 3} />
      </menu>
    </aside>
  );
}

export default SideMenu;
