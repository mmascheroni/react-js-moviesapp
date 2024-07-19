import React, { useContext } from 'react'
import GridCard from '../components/card/GridCard';
import { MovieContext } from '../../context/MovieContext';

const HomePage = () => {

    const { trendsMovies, recommendationsMovies, misteryRecommendations, recommendationsSeries, seriesTopRated, myList } = useContext(MovieContext);

    // const pelicula = []

    return (
        <>
            <GridCard movies={ trendsMovies } title='Tendencias' linkTo="browse/movies/trending" endpoint='/trending/movie/day' titlePage="Tendencias" />

            <GridCard movies={ myList } title='Mi lista' linkTo="browse/mylist" />

            <GridCard movies={ recommendationsMovies } title='Creemos que estos te encatarán' linkTo='browse/movies/recommendations' endpoint='/now_playing' titlePage='Recomendadas' />

            <GridCard movies={ recommendationsSeries } title='Series populares' linkTo='browse/series/populares' endpoint='/popular' titlePage='Populares' />

            <GridCard movies={ misteryRecommendations } title='Peliculas de misterio aclamadas por la crítica' linkTo='/browse/movies/9648' genreId='9648' titlePage='Misterio' />

            <GridCard movies={ seriesTopRated } title='Top ranking de series' linkTo='browse/series/top-rated' endpoint='/top-rated' titlePage='Top Ranking' />
        </>
    )
}

export default HomePage