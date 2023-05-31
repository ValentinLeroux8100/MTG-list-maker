import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import ManaCost from "Component/ManaCost";
import cardNumberBackground from "Graphics/Card Number Background.svg";

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
      <div className="card-back">
        <div className="card-mid">
          <div className="card-top">
            <div ref={titleRef} className="card-title">
              <div className="card-title-content">{card.info.name}</div>
            </div>
            <ManaCost cost={manaCost} />
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
