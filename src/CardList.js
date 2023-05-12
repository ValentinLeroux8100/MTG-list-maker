import {React, useState} from 'react'
import CardElement from './CardElement'
import {Droppable, Draggable } from 'react-beautiful-dnd';

function CardList({id, cardsList, useClone, cardsMap}) {
  return (
    <Droppable 
      droppableId={id} 
      type="card"
      renderClone={
        useClone ? 
        (provider, snapshot, descriptor)=>{
          const id = cardsList[descriptor.source.index].id
          const cardId = cardsList[descriptor.source.index].cardId
          const cardData = {
            id: id,
            info: cardsMap[cardId],
            count: cardsList[descriptor.source.index].count,
          }

          return(
            <CardElement 
              key={cardId} 
              card={cardData} 
              index={cardsList.length} 
              provider={provider}
              isDragging={snapshot.isDragging}
              isClone = {true}></CardElement>
          )
        }
        : null
      }
    >
    {(provider, snapshot) => (
      <div 
        {...provider.droppableProps} 
        ref={provider.innerRef} 
        className='card-list'
      >
        
        {cardsList.map((card, index) => {
          const cardId = card.cardId
          const cardData = {
            id: card.id,
            info: cardsMap[cardId],
            count: card.count,
          }
          return (
            <Draggable key={card.id} draggableId={card.id} index={index}>{
              ( dragProvider, dragSnapshot ) => (
                <CardElement index={index} card={cardData} provider={dragProvider} isDragging={dragSnapshot.isDragging}/>
              )}
            </Draggable>
          )
        })}
      
      {provider.placeholder}  
      
      </div>
    )}
    </Droppable>
  )
}

export default CardList