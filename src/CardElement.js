import React, {Suspense} from 'react'
import cardNumberBackground from "./Graphics/Card Number Background.svg";
import cardPlaceholder from "./Graphics/cardPlaceholder.png";
import { Draggable } from 'react-beautiful-dnd'

function CardImage({card}){
  return(
    <img 
      src={card.info.image}
      width="75%"
    />
  )
}

function CardBox({card}){
  return(
    <>
      <div className='card-number'>
        <img src={cardNumberBackground} alt="cardNumberBackground" className='card-number-background'/>
        <div className='card-number-text'>{card.count}x</div>
      </div>
      <div className='card-back'>
        <div className='card-mid'>
            <div className='card-top'>{card.info.name}</div>
        </div>
      </div>
    </>
  )
}

function CardElement({card, isClone, provider, isDragging, index}) {
  let display;

  console.log(isClone);
  if(isClone){
    display = <CardImage card={card}/>
  }else{
    display = <CardBox card={card}/>
  }

  return (  
    (
      <div 
        {... provider.draggableProps} 
        ref = {provider.innerRef} 
        {... provider.dragHandleProps} 
        className={'card ' + card.info.color.join(' ')}
      > 
          {display}
      </div>
    )
  )
}

export default CardElement