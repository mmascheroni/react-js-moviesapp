import React from 'react'
import ContainerCard from '../components/card/ContainerCard';
import Card from '../components/card/Card';
import { useLocation } from 'react-router-dom';

const TrendingPage = () => {
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';


    const location = useLocation();
    const movies = location.state.movies;
    const title = location.state.titlePage;
    const type = location.state.type;
    const genreId = location.state.genreId;
    const endpoint = location.state.endpoint;


    return (
        <ContainerCard title={title} endpoint={endpoint} movies={movies} >
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

export default TrendingPage