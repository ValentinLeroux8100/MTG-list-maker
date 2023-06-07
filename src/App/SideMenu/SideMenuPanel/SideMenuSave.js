import React, { useContext } from "react";
import PropTypes from "prop-types";
import SideMenuIcon from "../SideMenuIcon";
import searchIcon from "Graphics/Search Icon.svg";
import { DataContext } from "App/App";

function SideMenuSave({ isVisible = true }) {
  const data = useContext(DataContext);

  const save = () => {
    data.dispatch({ type: "saveData" });
  };

  const load = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = (e) => {
      data.dispatch({ type: "loadData", newData: e.target.result });
    };
  };

  const className = "side-menu-panel " + (isVisible ? "" : "hide");

  return (
    <li className={className}>
      <div className="side-menu-panel-sub-menu">
        <button type="file" className="side-menu-button" onClick={save}>
          <img src={searchIcon}></img>
          Save
        </button>
        <label className="side-menu-button">
          <input type="file" onChange={load} />
          <img src={searchIcon}></img>
          Load
        </label>
      </div>
    </li>
  );
}
SideMenuSave.propTypes = {
  isVisible: PropTypes.bool,
};

function SideIconSave({ selected = false, onClick }) {
  return (
    <SideMenuIcon selected={selected} onClick={onClick}>
      Save
    </SideMenuIcon>
  );
}

SideIconSave.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export { SideMenuSave, SideIconSave };
