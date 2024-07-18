import React, { useContext, useState } from 'react'
import { MovieContext } from '../../context/MovieContext'
import ContainerCard from '../components/card/ContainerCard';
import Card from '../components/card/Card';
import { useLocation, useParams } from 'react-router-dom';

const CardsPage = () => {
    const location = useLocation();
    const movies = location.state.movies;
    const title = location.state.titlePage;
    const type = location.state.type;
    const genreId = location.state.genreId;
    const endpoint = location.state.endpoint;

    // const { genreId } = useParams();


    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';



    return (
        <ContainerCard title={ title } type={ type } genreId={ genreId } endpoint={ endpoint } >
            {
                movies?.map((movie) => (
                    <Card 
                        key={movie.id} 
                        id={movie.id} 
                        src={`${BASE_URL_IMG}/${movie.backdrop_path}`} 
                        alt={ movie.original_title} 
                        title={ movie.original_title } 
                        {...movie} 
                    />
                ))
            }
        </ContainerCard>
    )
}

export default CardsPage