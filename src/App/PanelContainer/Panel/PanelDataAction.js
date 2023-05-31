import { PanelInfo } from ".";

const addPanel = (data, action) => {
  if (action.panelType) {
    const panelId = "panel-" + Object.keys(data.panel).length;
    return {
      ...data,
      panel: {
        ...data.panel,
        [panelId]: {
          id: panelId,
          title: panelId,
          type: action.panelType,
          props: { ...PanelInfo[action.panelType].dataStruct },
        },
      },
      panelOrder: [...data.panelOrder, panelId],
    };
  } else {
    console.warn("no panel type have been use");
    return data;
  }
};

const removePanel = (data, action) => {
  if (action.panelId) {
    data.panelOrder = data.panelOrder.filter((id) => id != action.panelId);
    delete data.panel[action.panelId];
  }
  return data;
};

const movePanel = (data, action) => {
  const newOrder = Array.from(data.panelOrder);

  if (newOrder[action.source.index] != action.draggableId) return data;

  newOrder.splice(action.source.index, 1);
  newOrder.splice(action.destination.index, 0, action.draggableId);

  return { ...data, panelOrder: newOrder };
};

const renamePanel = (data, action) => {
  data.panel[action.panelId].title = action.panelTitle;
  return { ...data };
};

const action = {
  addPanel: addPanel,
  removePanel: removePanel,
  movePanel: movePanel,
  renamePanel: renamePanel,
};

export default action;
