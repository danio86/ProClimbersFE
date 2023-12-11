import React from 'react'

function Rating({value, text, color}) {
  return (
    <div className='rating'>
        {/* 5 Rating Stars -> full filled, half filled or empty */}
        <span style={{color}}>
            <i className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span style={{color}}>
            <i className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span style={{color}}>
            <i className={value >= 2 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span style={{color}}>
            <i className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span style={{color}}>
            <i className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        {/* if text exists, show it */}
        <span>{text && text}</span>
    </div>
  )
}

export default Rating