import React from 'react'

const Card = ({ src, alt }) => {
    return (
        <div className='rounded-lg overflow-hidden shadow-lg w-64 flex-shrink-0 hover:scale-105 transition-transform duration-300'>
            <img src={ src } alt={ alt } />
        </div>
    )
}

export default Card