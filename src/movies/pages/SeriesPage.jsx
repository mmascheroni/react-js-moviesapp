import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { MovieContext } from '../../context/MovieContext';
import ContainerCard from '../components/card/ContainerCard';
import Card from '../components/card/Card';

const SeriesPage = () => {
    const location = useLocation();
    const categoryName = location.state?.name || location.state?.titlePage;
    const endpoint = location.state?.endpoint;
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';
    const { genreId } = useParams();

    const { series, setSeries, getSeriesByGenre, getRecommendationsSeriesAndSetSeries, getTopRatedSeriesAndSetSeries } = useContext(MovieContext);

    const [ number, setNumber ] = useState(null);

    useEffect(() => {
        if ( categoryName.length > 0 && ( endpoint === undefined || endpoint == '' )  ) {
            setSeries([]); 
            getSeriesByGenre(genreId);
            setNumber(4);
        }

        if ( endpoint === "/popular") {
            setSeries([]); 
            getRecommendationsSeriesAndSetSeries();
            setNumber(5);
        }

        if ( endpoint === "/top-rated" ) {
            setSeries([]); 
            getTopRatedSeriesAndSetSeries();
            setNumber(6);
        }

    }, [genreId]);


    return (
        <ContainerCard movies={ series } number={ number } genreId={ genreId } title={ `Series: ${categoryName}` }>
            {
                series?.map(serie => (
                    <Card 
                        key={serie.id}  
                        id={serie.id} 
                        src={
                            (serie.backdrop_path) ?
                            `${BASE_URL_IMG}/${serie.backdrop_path}`
                            :
                            '/assets/no-photo.jpg'
                        } 
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