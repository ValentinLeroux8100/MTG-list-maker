import { useReducer } from "react";
import { PanelDataAction } from "./PanelContainer/Panel";

const initData = {
  cardsData: {},
  panel: {},
  panelOrder: [],
};

const addCardData = (data, action) => {
  return {
    ...data,
    cardsData: {
      ...data.cardsData,
      ...action.cardData,
    },
  };
};

const actionList = {
  ...PanelDataAction,
  addCardData: addCardData,
};

const dataReducer = (data, action) => {
  return actionList[action.type](data, action);
};

export const useData = () => {
  const [data, dispatch] = useReducer(dataReducer, initData);

  return [data, dispatch];
};
