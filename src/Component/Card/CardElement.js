import React, {useState, useRef, useEffect} from 'react'
import cardNumberBackground from "graphics/Card Number Background.svg";
import ManaCost from '../ManaCost';

function CardImage({card, ...other}){
  return(
    <img className='card-image'
      src={card.info.image}
      {... other}
    />
  )
}

function CardBox({card, count, displayCount}){
  return(
    <>
    {displayCount &&
      <div className='card-number'>
        <img src={cardNumberBackground} alt="cardNumberBackground" className='card-number-background'/>
        <div className='card-number-text'>{count}x</div>
      </div>
     } <div className='card-back'>
        <div className='card-mid'>
            <div className='card-top'>
              <div className='card-title'>{card.info.name}</div> 
              <ManaCost cost={card.info.manaCost}/>
            </div>
        </div>
      </div>
    </>
  )
}

function CardElement({card, count, isClone, provider, index, displayCount}) {
  const [MousePosition, setMousePosition] = useState({
    right: 0,
    top: 0
  })  
  
  const cardBoxRef = useRef();
  const cardImageRef = useRef();

  const setPosition = () =>{
    setMousePosition({
      right: (cardBoxRef.current?.offsetLeft + cardBoxRef.current?.offsetWidth), 
      top: Math.max(cardBoxRef.current?.offsetTop - (cardImageRef.current.firstChild.offsetHeight/2), 0)})
  }

  useEffect(() => { setPosition() }, []);

  const UpdatePosition = (e) => {setPosition()}

  return (  
    (
      <div
        {... provider?.draggableProps} 
        {... provider?.dragHandleProps} 
        ref = {provider?.innerRef} 

        onMouseEnter={UpdatePosition}
      > 
        <div ref={cardBoxRef} className={'card ' + card.info.color.join(' ')}>
          <CardBox card={card} count={count} displayCount={displayCount}/>
          
        </div>
        <div ref={cardImageRef}>
          <CardImage card={card} style={{left: MousePosition.right + 5+ 'px', top:  MousePosition.top + "px" }}/>
        </div>
      </div>
    )
  )
}

export default CardElement