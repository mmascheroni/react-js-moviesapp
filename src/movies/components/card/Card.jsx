import React from 'react'

const Card = ({ src, alt }) => {
    return (
        <div className='w-2/12 h-64 bg-gray-400 rounded-t rounded-b'>
            <img src={ src } alt={ alt } />
        </div>
    )
}

export default Card