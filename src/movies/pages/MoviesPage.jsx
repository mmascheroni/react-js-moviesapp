import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getMoviesByGenre } from '../../helpers/GetMoviesByGenre';
import { MovieContext } from '../../context/MovieContext';
import Card from '../components/card/Card';
import ContainerCard from '../components/card/ContainerCard';

const MoviesPage = () => {
    const location = useLocation();
    const categoryName = location.state?.name;
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';
    const { genreId } = useParams();

    const { setIsLoading } = useContext(MovieContext);

    const [ movies , setMovies ] = useState([]);

    const getMoviesByGenreId = async (genreId, page = 1) => {
        setIsLoading(true);
        const data = await getMoviesByGenre(genreId, page);
        setMovies(prevMovies => {
            const newMovies = data.filter(movie => !prevMovies.some(prevMovie => prevMovie.id === movie.id));
            return [...prevMovies, ...newMovies];
        });
        setIsLoading(false);
    }


    useEffect(() => {
        setMovies([]); 
        getMoviesByGenreId(genreId);
    }, [genreId]);


    return (
        <ContainerCard movies={ movies } handleClick={ getMoviesByGenreId } genreId={ genreId } title={ `Peliculas: ${categoryName}` }>
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