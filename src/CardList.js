import {React, useState} from 'react'
import CardElement from './CardElement'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function CardList() {
  const [cards, setCards] = useState({ 
      "cards" : {
          "card-1" : {id: "card-1", text: "text 1", color: "R"}, 
          "card-2" : {id: "card-2", text: "text 2", color: "GB"},
      },
      "cardOrder" : ["card-2", "card-1"]
  })

  const onDragEnd = result =>{
    const {destination, source, draggableId} = result;

    if(!destination){ return } 

    if(destination.droppableId === source.droppableId 
    && destination.index === source.index) {return}

    const newOrder = Array.from(cards.cardOrder)

    newOrder.splice(source.index, 1)
    newOrder.splice(destination.index, 0, draggableId)
    
    setCards((prevData) => ({...prevData, cardOrder: newOrder}))
  }

  return (
    
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='test'>
      {provider => (
        <div {...provider.droppableProps} ref={provider.innerRef}>
          {cards.cardOrder.map((id,index) => {
            const cardInfo = cards.cards[id].text
            const cardColor = cards.cards[id].color
            return (
              <CardElement key={id} id={id} index={index} color={cardColor}>{cardInfo}</CardElement>
            )
          })}
        </div>
      )}
      </Droppable>
    </DragDropContext>
  )
}

export default CardList