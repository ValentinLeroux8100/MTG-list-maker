import { useReducer } from "react";
import { saveAs } from "file-saver";
import { PanelDataAction } from "../PanelContainer/Panel";

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

const saveData = (data, action) => {
  let blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  saveAs(blob, "newDeck.json");
  return data;
};

const loadData = (data, action) => {
  data = JSON.parse(action.newData);
  return { ...data };
};

const actionList = {
  ...PanelDataAction,
  addCardData: addCardData,
  saveData: saveData,
  loadData: loadData,
};

const dataReducer = (data, action) => {
  return actionList[action.type](data, action);
};

function useData() {
  const [data, dispatch] = useReducer(dataReducer, initData);

  return [data, dispatch];
}

export default useData;
