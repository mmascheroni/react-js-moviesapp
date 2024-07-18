import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { MovieContext } from '../../context/MovieContext';
import Card from '../components/card/Card';
import ContainerCard from '../components/card/ContainerCard';

const MoviesPage = () => {
    const location = useLocation();
    const categoryName = location.state?.name;
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';
    const { genreId } = useParams();

    const { movies, setMovies, getMoviesByGenre } = useContext(MovieContext);



    useEffect(() => {
        setMovies([]); 
        getMoviesByGenre(genreId);
    }, [genreId]);


    return (
        <ContainerCard movies={ movies } handleClick={ getMoviesByGenre } genreId={ genreId } title={ `Peliculas: ${categoryName}` }>
            {
                movies?.map(movie => (
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

export default MoviesPage