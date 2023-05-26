import React from "react";
import PropsType from "prop-types";

function SideMenuIcon({ selected, onClick, children }) {
  return (
    <li>
      <a
        onClick={onClick}
        className={"side-menu-nav-button " + (selected ? "selected" : "")}
      >
        {children}
      </a>
    </li>
  );
}

SideMenuIcon.propTypes = {
  selected: PropsType.bool,
  onClick: PropsType.func,
  children: PropsType.oneOfType([PropsType.element, PropsType.string]),
};

export default SideMenuIcon;
