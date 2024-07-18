import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { MovieContext } from '../../context/MovieContext';
import ContainerCard from '../components/card/ContainerCard';
import Card from '../components/card/Card';

const SeriesPage = () => {
    const { series, setSeries, getSeriesByGenre } = useContext(MovieContext);

    const location = useLocation();
    const categoryName = location.state?.name;
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';
    const { genreId } = useParams();

    useEffect(() => {
        setSeries([]); 
        getSeriesByGenre(genreId);
    }, [genreId]);


    return (
        <ContainerCard movies={ series } handleClick={ getSeriesByGenre } genreId={ genreId } title={ `Series: ${categoryName}` }>
            {
                series?.map(serie => (
                    <Card 
                        key={serie.id}  
                        id={serie.id} 
                        src={`${BASE_URL_IMG}/${serie.backdrop_path}`} 
                        alt={ serie.original_title} 
                        title={ serie.original_title } 
                        {...serie}
                    />
                ))
            }
        </ContainerCard>
    )
}


export default SeriesPage