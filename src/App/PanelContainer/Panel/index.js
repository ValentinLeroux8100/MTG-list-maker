import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as PanelCardList from "./PanelCardList";
import BasicDataAction from "./PanelDataAction";
import { Draggable } from "react-beautiful-dnd";

import "./Panel.scss";

const PanelInfo = {
  ...PanelCardList.Info,
};

const PanelDataAction = {
  ...BasicDataAction,
  ...PanelCardList.DataManagement,
};

function Panel({ id, index, type, data, ...props }) {
  const titleRef = useRef();

  useEffect(() => {
    titleRef.current.value = data.title;
  }, [data.title]);

  const isTypeExist =
    Object.keys(PanelInfo).find((element) => element == type) != undefined;
  const SpecificPanel = isTypeExist ? PanelInfo[type].content : "";
  return (
    <>
      {isTypeExist && (
        <Draggable draggableId={id} index={index}>
          {(provider) => (
            <div
              {...provider.draggableProps}
              ref={provider.innerRef}
              className={"panel " + (index == 0 ? "first" : "")}
              {...props}
            >
              <header className="panel-header">
                <div
                  {...provider.dragHandleProps}
                  className="box-selector"
                ></div>
                <input className="panel-header-input" ref={titleRef}></input>
              </header>

              <SpecificPanel id={id}></SpecificPanel>

              {provider.placeholder}
            </div>
          )}
        </Draggable>
      )}
    </>
  );
}

Panel.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  type: PropTypes.string,
  data: PropTypes.object,
};

export { Panel, PanelInfo, PanelDataAction };
