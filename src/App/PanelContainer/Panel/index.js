import * as PanelCardList from "./PanelCardList";
import BasicDataAction from "./PanelDataAction"
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import "./Panel.scss";

const PanelInfo = {
    ...PanelCardList.Info,
};

const PanelDataAction = {
  ...BasicDataAction,
  ...PanelCardList.DataManagement
}

function Panel({id, index, type, children}) {
  const isTypeExist = Object.keys(PanelInfo).find(element => element == type) != undefined
  const SpecificPanel = (isTypeExist)?PanelInfo[type].content:""

  return (
      <>
        {isTypeExist && 
        <Draggable draggableId={id} index={index}>
          {provider => (
            <div {... provider.draggableProps} ref={provider.innerRef} className='panel'>
            
                <header className='panel-header'>
                  <div {... provider.dragHandleProps} className="box-selector"></div>
                  <h1>{id}</h1>
                </header>

                <SpecificPanel id={id}></SpecificPanel>

                {provider.placeholder}
            </div>
            
          )}
          </Draggable>
        }
    </>
  )
}


export { Panel, PanelInfo, PanelDataAction}
