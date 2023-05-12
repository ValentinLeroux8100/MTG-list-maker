import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import CardList from './CardList'
import CardElement from './CardElement'

function PanelElement({id, index, cardMap, data, children}) {
  return (
    <Draggable draggableId={id} index={index}>
    {provider => (
      <div 
        {... provider.draggableProps} 
        ref = {provider.innerRef} 
        className='panel'
      >
          <header className='panel-header'>
            <div {... provider.dragHandleProps} className="box-selector"></div>
            <h1>{id}</h1>
          </header>

          <CardList id={id} cardsList={data.cardsList} cardsMap={cardMap} useClone={true}></CardList>
          {provider.placeholder}
      </div>
    )}
    </Draggable>
  )
}

export default PanelElement