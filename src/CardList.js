import {React, useState} from 'react'
import CardElement from './CardElement'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function CardList({id, cardsIds, cardsMap}) {
  return (
    <Droppable droppableId={id} type="card">
    {(provider, snapshot) => (
      <div 
        {...provider.droppableProps} 
        ref={provider.innerRef} 
      >
        
        {cardsIds.map((id,index) => {
          const cardInfo = cardsMap[id].text
          const cardColor = cardsMap[id].color
          return (
            <CardElement key={id} id={id} index={index} color={cardColor}>{cardInfo}</CardElement>
          )
        })}
      
      {provider.placeholder}  
      
      </div>
    )}
    </Droppable>
  )
}

export default CardList