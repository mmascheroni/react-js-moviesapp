import React, { useContext, useEffect, useState } from 'react'
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

    const [ number, setNumber ] = useState(null);

    useEffect(() => {

        if ( categoryName.length > 0 ) {
            setSeries([]); 
            getSeriesByGenre(genreId);
            setNumber(4);
        }
    }, [genreId]);


    return (
        <ContainerCard movies={ series } number={ number } genreId={ genreId } title={ `Series: ${categoryName}` }>
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