import React, {useContext} from 'react'
import CardElement from './CardElement'
import {Droppable, Draggable } from 'react-beautiful-dnd'
import { DataContext } from "App/App"
import './Card.scss'

function CardList({id, cards, displayCount = true}) {
  const data = useContext(DataContext)
  const cardsData = data.cardsData

  return (
    <Droppable droppableId={id} type="card">
    {(provider) => (
      <div {...provider.droppableProps} ref={provider.innerRef} className='card-list'>
        
        {cards.map((card, index) => {
          const cardId = card.cardId
          const cardData = { id: card.id, info: cardsData[cardId], count: card.count}
          
          return (
              <Draggable key={card.id} draggableId={card.id} index={index}>
              {
                (dragProvider, dragSnapshot) => {
                  let count = cardData.count

                  if(dragSnapshot.isDragging){
                    count -= 1
                  }

                  return(
                    <>
                      <CardElement index={index} card={cardData} provider={dragProvider} 
                      count={dragSnapshot.isDragging?1:cardData.count} displayCount={displayCount}/>

                      {dragSnapshot.isDragging && count > 0 && 
                        <CardElement index={index} card={cardData} count={count} displayCount={displayCount}/>
                      }
                    </>
                  )
                }}
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