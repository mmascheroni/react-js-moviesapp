import React, { useContext } from 'react'
import GridCard from '../components/card/GridCard';
import { MovieContext } from '../../context/MovieContext';

const HomePage = () => {

    const { trendsMovies } = useContext(MovieContext);

    const pelicula = []

    return (
        <>
            <GridCard movies={ trendsMovies } title='Trends Movies' />

            <GridCard movies={ trendsMovies } title='Trends Movies' />
        </>
    )
}

export default HomePage