import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ButtonMylist from '../components/button/ButtonMylist';
import { useMyList } from '../../hooks/useMyList';

const TitlePage = () => {
    const location = useLocation();
    const movie = location.state;

    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';

    const { isInMyList, handleAddTitle, handleDeleteTitle } = useMyList(movie.id);


    return (
        <div className="mt-8 mb-8 flex items-center">
            <div className='flex gap-5 bg-indigo-900 rounded-md p-5 max-w-4xl mx-auto box-shadow'>
                <button className='flex self-start pl-5'>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </Link>
            </button>
                <img className='rounded-lg box-shadow--poster' src={`${BASE_URL_IMG}/${movie.poster_path}`} alt={movie.alt} />
                <div className='flex flex-col justify-evenly gap-2 text-white'>
                    <h2 className='text-xl text-white font-bold text-center'>{movie.title}</h2>
                    <div className='flex flex-col gap-2'>
                        { movie.overview && <p><b>Overview 📝: </b>{movie.overview}</p> }
                        
                        { movie.media_type && <p><b>Media 📽️: </b>{movie.media_type}</p>  }

                        { movie.first_air_date && <p><b>Fecha de estreno 🗓️: </b>{movie.first_air_date}</p> }

                        { movie.release_date && <p><b>Fecha de estreno 🗓️: </b>{movie.release_date}</p> }

                        <p><b>Vistas 👓: </b> {movie.popularity}</p>

                        <p><b>Votos ⭐:</b> {movie.vote_average}</p>

                        <p className='text-center'>
                            {
                                !isInMyList ?
                                <ButtonMylist 
                                    id={ movie.id } 
                                    handleClick={ (e) => handleAddTitle(e, {...movie}) } 
                                    tooltipContent="Agregar a Mi lista"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#ffff" className="h-8 w-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                    </svg>
                                </ButtonMylist>
                    
                                :

                                <ButtonMylist id={ movie.id } handleClick={ (e) => handleDeleteTitle(e, movie.id) } tooltipContent="Quitar de Mi lista">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffff" className="size-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                                        />
                                    </svg>
                                </ButtonMylist>
                            }               
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitlePage