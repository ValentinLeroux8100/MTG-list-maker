import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Mana from "Component/Mana/Mana";
import cardNumberBackground from "Graphics/Card Number Background.svg";
import "./CardBox.scss";

const CardBox = forwardRef(function CardBox(
  { card, count, isDisplayCount, manaCost },
  titleRef
) {
  return (
    <>
      {isDisplayCount && (
        <div className="card-number">
          <img
            src={cardNumberBackground}
            alt="cardNumberBackground"
            className="card-number-background"
          />
          <div className="card-number-text">{count}x</div>
        </div>
      )}{" "}
      <div className="card-back card-box">
        <div className="card-mid card-box">
          <div className="card-top card-box">
            <div ref={titleRef} className="card-title">
              <div className="card-title-content">{card.info.name}</div>
            </div>
            <Mana cost={manaCost} />
          </div>
        </div>
      </div>
    </>
  );
});

CardBox.propTypes = {
  card: PropTypes.object,
  count: PropTypes.number,
  isDisplayCount: PropTypes.bool,
  manaCost: PropTypes.string,
};

export default CardBox;
