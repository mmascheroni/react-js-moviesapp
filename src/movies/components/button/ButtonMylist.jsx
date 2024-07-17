import React from 'react'

const ButtonMylist = ({ id, handleClick, tooltipContent, children }) => {
    return (
        <button id={ id } className='tooltip-btn transform transition-transform duration-300 hover:scale-110 opacity-60 hover:opacity-100' onClick={ handleClick }>
            <span className="tooltip-text">{ tooltipContent }</span>
            {children}
        </button>
    )
}

export default ButtonMylist