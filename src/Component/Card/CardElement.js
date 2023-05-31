import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import CardImage from "./CardImage";
import CardBox from "./CardBox";

function CardElement({ card, count, provider, index, isDisplayCount }) {
  const [MousePosition, setMousePosition] = useState({
    right: 0,
    top: 0,
  });

  const cardBoxRef = useRef();
  const cardImageRef = useRef();
  const cardTitleRef = useRef();

  const setPosition = () => {
    const titleBorder = cardTitleRef.current.getBoundingClientRect();
    const boxBorder = cardBoxRef.current.getBoundingClientRect();
    const imageBorder =
      cardImageRef.current.firstElementChild.getBoundingClientRect();

    setMousePosition({
      width: titleBorder.width,
      right: boxBorder.left + boxBorder.width,
      top: Math.min(
        Math.max(boxBorder.top - imageBorder.height / 2, 0),
        window.innerHeight - imageBorder.height
      ),
      imageWidth: imageBorder.width,
    });
  };

  useEffect(() => {
    setPosition();
  }, []);

  const UpdatePosition = () => {
    setPosition();
  };

  const classColor = {
    W: "white",
    U: "blue",
    B: "black",
    R: "red",
    G: "green",
  };

  const cardFaces = [];
  let manaCost = "";
  let colors = [];

  if (card.info.card_faces != undefined) {
    cardFaces.push(card.info.card_faces[0].image_uris?.normal);
    cardFaces.push(card.info.card_faces[1].image_uris?.normal);
    manaCost = card.info.card_faces[0].mana_cost;
    colors = card.info.card_faces[0].colors?.map((e) => classColor[e]);
  } else {
    cardFaces.push(card.info["image_uris"]?.normal);
    manaCost = card.info["mana_cost"];
    colors = card.info.colors.map((e) => classColor[e]);
  }

  const boxStyle = { "--box-width": MousePosition.width + "px" };

  return (
    <div
      {...provider?.draggableProps}
      {...provider?.dragHandleProps}
      ref={provider?.innerRef}
      onMouseEnter={UpdatePosition}
    >
      <div
        ref={cardBoxRef}
        className={"card " + colors?.join(" ")}
        style={boxStyle}
      >
        <CardBox
          ref={cardTitleRef}
          card={card}
          count={count}
          isDisplayCount={isDisplayCount}
          manaCost={manaCost}
        />
      </div>

      <div ref={cardImageRef}>
        {cardFaces.map((e, index) => {
          const imageStyle = {
            left:
              MousePosition.right + MousePosition.imageWidth * index + 5 + "px",
            top: MousePosition.top + "px",
          };

          return <CardImage key={index} link={e} style={imageStyle} />;
        })}
      </div>
    </div>
  );
}

CardElement.propTypes = {
  card: PropTypes.object,
  count: PropTypes.number,
  provider: PropTypes.object,
  index: PropTypes.number,
  isDisplayCount: PropTypes.bool,
};

export default CardElement;
