import React from 'react';

const Card = ({ src, alt, title }) => {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg w-64 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 group cursor-pointer">
            <img className="w-full" src={src} alt={alt} />
            <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="bg-black bg-opacity-70 text-white text-center p-2 w-full">
                    {title}
                </div>
            </div>
        </div>
    );
};

export default Card;
