import React, { useContext } from 'react'
import GridCard from '../components/card/GridCard';
import { MovieContext } from '../../context/MovieContext';

const HomePage = () => {

    const { trendsMovies, recommendationsMovies, misteryRecommendations, recommendationsSeries, seriesTopRated, myList } = useContext(MovieContext);

    // const pelicula = []

    return (
        <>
            <GridCard movies={ trendsMovies } title='Tendencias' linkTo="browse/trending" endpoint='/trending/movie/day' titlePage="Peliculas: Tendencias" />

            <GridCard movies={ myList } title='Mi lista' />

            <GridCard movies={ recommendationsMovies } title='Creemos que estos te encatarán' />

            <GridCard movies={ recommendationsSeries } title='Series populares' />

            <GridCard movies={ misteryRecommendations } title='Peliculas de misterio aclamadas por la crítica' linkTo='/browse/all/9648' titlePage="Peliculas: Misterio" type="movie" genreId='9648' />

            <GridCard movies={ seriesTopRated } title='Top ranking de series' />
        </>
    )
}

export default HomePage