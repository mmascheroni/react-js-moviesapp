import React, { useContext } from 'react'
import GridCard from '../components/card/GridCard';
import { MovieContext } from '../../context/MovieContext';

const HomePage = () => {

    const { trendsMovies, recommendationsMovies, misteryRecommendations } = useContext(MovieContext);

    const pelicula = []

    return (
        <>
            <GridCard movies={ trendsMovies } title='Tendencias' />

            <GridCard movies={ pelicula } title='Mi lista' />

            <GridCard movies={ recommendationsMovies } title='Creemos que estos te encatarán' />

            <GridCard movies={ pelicula } title='Peliculas de misterio aclamadas por la crítica' />
        </>
    )
}

export default HomePage