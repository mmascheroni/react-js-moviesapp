import React, { useContext, useEffect } from 'react';
import ButtonMylist from '../button/ButtonMylist';
import { Link } from 'react-router-dom';
import { useMyList } from '../../../hooks/useMyList';
import { MovieContext } from '../../../context/MovieContext';


const Card = (props) => {

    const { src, alt, title, id } = props;

    const { isInMyList, handleAddTitle, handleDeleteTitle } = useMyList(id);


    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg w-64 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 group cursor-pointer box-">
            <Link to={`/browse/${ id }`} state={props} >
                <img className="w-full h-160" src={src} alt={alt} />
                <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex flex-col bg-black bg-opacity-70 text-white text-center p-2 w-full">
                        {title}
                        <div className="flex justify-center mt-2">
                            {
                                !isInMyList ?
                                <ButtonMylist id={ id } handleClick={ (e) => handleAddTitle(e, props) } tooltipContent="Agregar a Mi lista">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#ffff" className="h-8 w-8"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                                        />
                                    </svg>
                                </ButtonMylist>

                                :

                                <ButtonMylist id={ id } handleClick={ (e) => handleDeleteTitle(e, id) } tooltipContent="Quitar de Mi lista">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffff" className="size-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                </ButtonMylist>
                            }               
                        </div>
                    </div>

                    
                </div>
            </Link>
        </div>
    );
};

export default Card;
