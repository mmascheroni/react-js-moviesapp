import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { MovieContext } from '../../context/MovieContext';
import Card from '../components/card/Card';
import ContainerCard from '../components/card/ContainerCard';

const MoviesPage = () => {
    const location = useLocation();
    const categoryName = location.state?.name || location.state?.titlePage;
    const endpoint = location.state?.endpoint;
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';
    const { genreId } = useParams();


    const { movies, setMovies, getMoviesByGenre, getTrendsMoviesAndSetMovies, getRecommendationsMoviesAndSetMovies } = useContext(MovieContext);

    const [ number, setNumber ] = useState(null);


    useEffect(() => {
        if ( categoryName.length > 0 && ( endpoint === undefined || endpoint == '' ) ) {
            setMovies([]); 
            getMoviesByGenre(genreId);
            setNumber(0);
        }

        if ( endpoint === "/trending/movie/day") {
            setMovies([]); 
            getTrendsMoviesAndSetMovies();
            setNumber(1);
        }

        if ( endpoint === "/now_playing" ) {
            setMovies([]); 
            getRecommendationsMoviesAndSetMovies();
            setNumber(2);
        }

        
    }, [genreId]);



    return (
        <ContainerCard movies={ movies } number={ number } genreId={ genreId } title={ `Peliculas: ${categoryName}` }>
            {
                movies?.map(movie => (
                    <Card 
                        key={movie.id}  
                        id={movie.id} 
                        src={
                            movie.backdrop_path ?
                            `${BASE_URL_IMG}/${movie.backdrop_path}`
                            :
                            '/assets/no-photo.jpg'
                        }  
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