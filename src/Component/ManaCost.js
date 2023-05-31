import React from "react";
import PropTypes from "prop-types";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function ManaCost({ cost }) {
  const images = importAll(
    require.context("Graphics/mana_symbol", false, /\.(png|jpe?g|svg)$/)
  );

  const list_cost = cost
    .replace(/{([^/}]*)\/*([^/}]*)\/*([^/}]*)}/g, "$1$2$3,")
    .split(",")
    .slice(0, -1);

  return (
    <div className="card-mana">
      {list_cost.map((symbol, index) => {
        return (
          <img
            key={index}
            src={images["mana-" + symbol.toLowerCase() + ".png"]}
          />
        );
      })}
    </div>
  );
}

ManaCost.propTypes = {
  cost: PropTypes.string,
};

export default ManaCost;
