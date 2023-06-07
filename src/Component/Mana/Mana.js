import React from "react";
import PropTypes from "prop-types";
import "./Mana.scss";

function Mana({ cost }) {
  const importIcon = (name) => {
    try {
      return require("Graphics/mana_symbol/" + name);
    } catch {
      return "";
    }
  };

  const regexManaName = /{([^/}]*)\/*([^/}]*)\/*([^/}]*)}/g;

  const listCost = cost
    .replace(regexManaName, "$1$2$3,")
    .split(",")
    .slice(0, -1);

  return (
    <span className="mana">
      {listCost.map((symbolName, index) => {
        const symbol = importIcon("mana-" + symbolName.toLowerCase() + ".png");
        return <img key={index} src={symbol} />;
      })}
    </span>
  );
}

Mana.propTypes = {
  cost: PropTypes.string,
};

export default Mana;
