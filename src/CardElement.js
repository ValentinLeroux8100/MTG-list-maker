import React from 'react'
import cardNumberBackground from "./Graphics/Card Number Background.svg";

function CardElement({color, children}) {
  

  return (
    <div className='card'>
        <div className='card-number'>
            <img src={cardNumberBackground} alt="cardNumberBackground" className='card-number-background'/>
            <div className='card-number-text'>3x</div>
        </div>
        <div className='card-back'>
            <div className='card-mid'>
                <div className='card-top'>Alloy Animist</div>
            </div>
        </div>
    </div>
  )
}

export default CardElement