import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../../../context/MovieContext';
import SpinnerLoader from '../spinnerLoader/SpinnerLoader';

const ContainerCard = ({title, number, genreId, showBtn = true, children }) => {


    const { isLoading, getMoviesByGenre, getTrendsMoviesAndSetMovies, getRecommendationsMoviesAndSetMovies, getSeriesByGenre } = useContext(MovieContext);

    const [ page, setPage ] = useState(2);


    const addPageToRequest = () => {
        if ( number == 0) {
            getMoviesByGenre(genreId, page);
            setPage(page + 1);
        }
        
        if ( number == 1 ) {
            getTrendsMoviesAndSetMovies(page);
            setPage(page + 1);
        }

        if ( number == 2 ) {
            getRecommendationsMoviesAndSetMovies(page);
            setPage(page + 1);
        }
        
        if ( number == 4 ) {
            getSeriesByGenre(genreId, page);
            setPage(page + 1);
        }
    }

    useEffect(() => {
        setPage(2);
    }, [genreId]);

    return (
        <>
            <h2 className='mt-6 text-white font-bold text-3xl text-center'>{ title }</h2>
            <div className='flex flex-wrap gap-4 justify-center mt-6 mb-10'>
                {children}
            </div>
            {
                showBtn && 
                <div className='text-center'>
                    <button>
                        {
                            isLoading ? <SpinnerLoader />
                            : 

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="size-10" onClick={ addPageToRequest }>
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                        </svg>
                        }
                    </button>
                </div>
            }
        </>
        
    )
}

export default ContainerCard