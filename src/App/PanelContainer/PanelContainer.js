import React, { useContext } from "react";
import { Panel } from "./Panel";
import { Droppable } from "react-beautiful-dnd";
import { DataContext } from "App/App";
import listIcon from "Graphics/List Icon.svg";

function PanelContainer() {
  const data = useContext(DataContext);

  return (
    <>
      <Droppable droppableId="all-panel" direction="horizontal" type="column">
        {(provider) => (
          <section {...provider.droppableProps} ref={provider.innerRef}>
            {data.data.panelOrder.map((id, index) => {
              const panelData = data.data.panel[id];

              return (
                <Panel
                  key={id}
                  id={id}
                  index={index}
                  data={panelData}
                  type={panelData.type}
                >
                  {panelData.title}
                </Panel>
              );
            })}

            {provider.placeholder}
          </section>
        )}
      </Droppable>
      <div className="panel-add">
        <div className="panel-add-container">
          <a className="panel-add-container-button">
            <img src={listIcon}></img>
          </a>
          <a className="panel-add-container-button">a</a>
          <a className="panel-add-container-button">a</a>
          <a className="panel-add-container-button">a</a>
        </div>
      </div>
    </>
  );
}

export default PanelContainer;
