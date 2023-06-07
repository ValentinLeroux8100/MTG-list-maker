import React, { useContext } from "react";
import PropTypes from "prop-types";
import CardElement from "./CardElement";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { DataContext } from "App/App";
import "./CardList.scss";

function CardList({
  id,
  cards,
  isDisplayCount = true,
  isDropDisabled = false,
  isVirtual = false,
}) {
  const data = useContext(DataContext);
  const cardsData = data.data.cardsData;

  return (
    <Droppable
      droppableId={id}
      type="card"
      isDropDisabled={isDropDisabled}
      mode={isVirtual ? "" : ""}
    >
      {(provider) => (
        <div
          {...provider.droppableProps}
          ref={provider.innerRef}
          className="card-list"
        >
          {cards.map((card, index) => {
            const data = {
              id: card.id,
              info: cardsData[card.cardId],
              count: card.count,
            };
            const props = {
              index: index,
              card: data,
              isDisplayCount: isDisplayCount,
            };

            return (
              <Draggable key={card.id} draggableId={card.id} index={index}>
                {(dragProvider, dragSnapshot) => {
                  let count = data.count;

                  if (dragSnapshot.isDragging) {
                    count -= 1;
                  }

                  return (
                    <>
                      <CardElement
                        provider={dragProvider}
                        count={dragSnapshot.isDragging ? 1 : data.count}
                        {...props}
                      />

                      {dragSnapshot.isDragging && count > 0 && (
                        <CardElement
                          count={count}
                          {...props}
                          isDisplay={false}
                        />
                      )}
                    </>
                  );
                }}
              </Draggable>
            );
          })}

          {provider.placeholder}
        </div>
      )}
    </Droppable>
  );
}

CardList.propTypes = {
  id: PropTypes.string,
  cards: PropTypes.array,
  isDisplayCount: PropTypes.bool,
  isDropDisabled: PropTypes.bool,
  isVirtual: PropTypes.bool,
};

export default CardList;
