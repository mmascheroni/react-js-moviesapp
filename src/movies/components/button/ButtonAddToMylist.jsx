import React from 'react'

const ButtonAddToMylist = ({ id, handleClick, children }) => {
    return (
        <button id={ id } className='transform transition-transform duration-300 hover:scale-110 opacity-60 hover:opacity-100' onClick={ handleClick } >
            {children}
        </button>
    )
}

export default ButtonAddToMylist