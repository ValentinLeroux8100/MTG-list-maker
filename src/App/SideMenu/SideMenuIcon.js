import React from "react";
import PropsType from "prop-types";

function SideMenuIcon({ selected, children, ...props }) {
  return (
    <li {...props}>
      <button
        className={"side-menu-nav-button " + (selected ? "selected" : "")}
      >
        {children}
      </button>
    </li>
  );
}

SideMenuIcon.propTypes = {
  selected: PropsType.bool,
  onClick: PropsType.func,
  children: PropsType.oneOfType([PropsType.element, PropsType.string]),
};

export default SideMenuIcon;
