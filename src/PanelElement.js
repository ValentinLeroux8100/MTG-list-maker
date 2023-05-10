import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import CardList from './CardList'

function PanelElement({id, index, children}) {
  return (
    <Draggable draggableId={id} index={index}>
    {provider => (
      <div {... provider.draggableProps} ref = {provider.innerRef} className='panel'>
          <header className='panel-header'>
            <div {... provider.dragHandleProps} className="box-selector"></div>
            <h1>{id}</h1>
          </header>
          <CardList></CardList>
      </div>
    )}
    </Draggable>
  )
}

export default PanelElement