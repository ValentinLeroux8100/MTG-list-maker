import React from 'react'
import cardNumberBackground from "./Graphics/Card Number Background.svg";
import { Draggable } from 'react-beautiful-dnd'

function CardElement({color, id, index, count, children}) {
  return (  
    <Draggable draggableId={id} index={index}>
    {provider => (
      <div 
        {... provider.draggableProps} 
        ref = {provider.innerRef} 
        {... provider.dragHandleProps} 
        className={'card ' + color.join(' ')}
      >
          <div className='card-number'>
              <img src={cardNumberBackground} alt="cardNumberBackground" className='card-number-background'/>
              <div className='card-number-text'>{count}x</div>
          </div>
          <div className='card-back'>
              <div className='card-mid'>
                  <div className='card-top'>{children}</div>
              </div>
          </div>
      </div>
    )}
    </Draggable>
  )
}

export default CardElement