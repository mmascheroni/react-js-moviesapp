import React, { useContext, useRef } from 'react';
import Card from './Card';

const GridCard = ({ movies = [], title = ''}) => {
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    };

    return (
        <div className='pt-5 pl-2 pr-2'>
            { 
            
            movies.length > 0 ? 
            
            <>
                <h3 className='ml-1 text-lg font-bold text-white'>{ title }</h3>
                <div className='relative overflow-hidden'>
                    <button
                        onClick={scrollLeft}
                        className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-700 bg-opacity-65 rounded-full text-white'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </button>
                    <div
                        className='flex space-x-4 pt-4 pb-4 overflow-x-auto overflow-x-hidden'
                        style={{ scrollBehavior: 'smooth' }}
                        ref={scrollRef}
                    >
                        {movies?.map(movie => (
                            <Card key={movie.id} src={`${BASE_URL_IMG}/${movie.backdrop_path}`} alt={movie.title} />
                        ))}
                    </div>
                    <button
                        onClick={scrollRight}
                        className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-700 bg-opacity-65 rounded-full text-white'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </> 
            
            : 
            
            <>
                <h3 className='text-lg font-bold text-white'>{ title }</h3>
                <p className='mt-2 font-bold text-lg text-white'>Hubo un error al recuperar las peliculas</p>
            </>
            
            }
            
        </div>
    );
}

export default GridCard;
