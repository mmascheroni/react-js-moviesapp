import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../../../context/MovieContext';
import ButtonAddToMylist from '../button/ButtonAddToMylist';


const Card = ({ src, alt, title, id }) => {

    const { onAddTitleToMyList, onDeleteTitleToMyList, myList } = useContext(MovieContext);

    const [isInMyList, setIsInMyList] = useState(false);


    const filterMyList = (id) => {
        if (!myList.some((e) => e.id == id)) {
                setIsInMyList(false);
        } else {
            setIsInMyList(true);
        }
    }

    useEffect(() => {
        filterMyList(id);
    }, [myList]);


    const handleAddTitle = () => {
        onAddTitleToMyList({ id, title, src }); 
    };

    const handleDeleteTitle = () => {
        onDeleteTitleToMyList({id});
    }

    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg w-64 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 group cursor-pointer box-shadow">
            <img className="w-full" src={src} alt={alt} />
            <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex flex-col bg-black bg-opacity-70 text-white text-center p-2 w-full">
                    {title}
                    <div className="flex justify-center mt-2">
                        {
                            !isInMyList ?
                            <ButtonAddToMylist id={ id } handleClick={ handleAddTitle }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#ffff" className="h-8 w-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </ButtonAddToMylist>

                            :

                            <ButtonAddToMylist id={ id } handleClick={ handleDeleteTitle }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffff" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </ButtonAddToMylist>
                        }               
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Card;
