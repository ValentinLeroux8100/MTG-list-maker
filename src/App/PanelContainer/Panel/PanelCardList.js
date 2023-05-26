import React, { useContext } from "react";
import PropTypes from "prop-types";
import CardList from "Component/Card/CardList";
import { DataContext } from "App/App";

const Info = {
  list: {
    content: Content,
    param: Param,
    dataStruct: {
      cardsList: [],
    },
  },
};

function Content({ id }) {
  const data = useContext(DataContext);
  const cards = data.data.panel[id].props.cardsList;

  return <CardList id={id} cards={cards}></CardList>;
}

Content.propTypes = {
  id: PropTypes.string,
};

function Param({ id }) {
  return <div>need implementation</div>;
}

Param.propTypes = {
  id: PropTypes.string,
};

const addCardToList = (data, action) => {
  const { panelId, card } = action;
  const cardsList = data.panel[panelId].props.cardsList;

  const cardIndex = cardsList.findIndex((element) => element.cardId == card);

  if (cardIndex != -1) {
    data.panel[panelId].props.cardsList[cardIndex].count += 1;
    return { ...data };
  } else {
    const newCard = { id: card + panelId, cardId: card, count: 1 };
    data.panel[panelId].props.cardsList = [
      ...data.panel[panelId].props.cardsList,
      newCard,
    ];
    return { ...data };
  }
};

const removeCardToList = (data, action) => {
  const { panelId, card } = action;
  const cardsList = data.panel[panelId].props.cardsList;

  let cardIndex = cardsList.findIndex((element) => element.cardId == card);

  if (cardIndex == -1) return data;

  if (cardsList[cardIndex].count == 1) {
    data.panel[panelId].props.cardsList.splice([cardIndex], 1);
  } else {
    data.panel[panelId].props.cardsList[cardIndex].count -= 1;
  }

  return data;
};

const moveCardToList = (data, action) => {
  const { source, destination, draggableId } = action;
  const cardsList = data.panel[source.droppableId].props.cardsList;

  if (cardsList[source.index].id != draggableId) return data;
  if (source.droppableId === destination.droppableId) return data;

  const cardId = cardsList[source.index].cardId;
  const addAction = { panelId: destination.droppableId, card: cardId };
  const removeAction = { panelId: source.droppableId, card: cardId };

  let result = addCardToList(data, addAction);
  result = removeCardToList(result, removeAction);
  return { ...data, ...result };
};

const DataManagement = {
  addCardToList: addCardToList,
  removeCardToList: removeCardToList,
  moveCardToList: moveCardToList,
};

export { Content, Info, DataManagement };
