import {React, useState} from 'react'
import CardElement from './CardElement'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function CardList({id, cardsList, cardsMap}) {
  return (
    <Droppable 
      droppableId={id} 
      type="card"
    >
    {(provider, snapshot) => (
      <div 
        {...provider.droppableProps} 
        ref={provider.innerRef} 
        className='card-list'
      >
        
        {cardsList.map((card, index) => {
          const cardId = card.cardId
          const cardInfo = cardsMap[cardId].text
          const cardColor = cardsMap[cardId].color
          return (
            <CardElement key={card.id} id={card.id} index={index} color={cardColor} count={card.count}>{cardInfo}</CardElement>
          )
        })}
      
      {provider.placeholder}  
      
      </div>
    )}
    </Droppable>
  )
}

export default CardList