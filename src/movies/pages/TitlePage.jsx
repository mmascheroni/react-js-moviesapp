import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const TitlePage = () => {
    const location = useLocation();
    const movie = location.state;

    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';

    const { id } = useParams();


    return (
        <div className="mt-8 mb-8 flex items-center justify-center">
            <div className='flex gap-5 bg-indigo-900 rounded-md p-5 max-w-3xl mx-auto box-shadow'>
                <img className='rounded-lg box-shadow--poster' src={`${BASE_URL_IMG}/${movie.poster_path}`} alt={movie.alt} />
                <div className='flex flex-col justify-evenly gap-2 text-white'>
                    <h2 className='text-xl text-white font-bold text-center'>{movie.title}</h2>
                    <div className='flex flex-col gap-2'>
                        { movie.overview && <p><b>Overview 📝: </b>{movie.overview}</p> }
                        
                        { movie.media_type && <p><b>Media 📽️: </b>{movie.media_type}</p>  }

                        { movie.first_air_date && <p><b>Fecha de estreno 🗓️: </b>{movie.first_air_date}</p> }

                        { movie.release_date && <p><b>Fecha de estreno 🗓️: </b>{movie.release_date}</p> }

                        <p><b>Vistas 👓: </b> {movie.popularity}</p>

                        <p><b>Votos ⭐</b> {movie.vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitlePage