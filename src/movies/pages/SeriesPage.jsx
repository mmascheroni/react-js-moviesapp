import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { MovieContext } from '../../context/MovieContext';
import { getSeriesByGenre } from '../../helpers/getSeriesByGenre';
import ContainerCard from '../components/card/ContainerCard';
import Card from '../components/card/Card';

const SeriesPage = () => {
const location = useLocation();
    const categoryName = location.state?.name;
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';
    const { genreId } = useParams();

    const { setIsLoading } = useContext(MovieContext);

    const [ series , setSeries ] = useState([]);

    const getSeriesByGenreId = async (genreId, page = 1) => {
        setIsLoading(true);
        const data = await getSeriesByGenre(genreId, page);
        setSeries(prevSeries => {
            const newSeries = data.filter(movie => !prevSeries.some(prevMovie => prevMovie.id === movie.id));
            return [...prevSeries, ...newSeries];
        });
        setIsLoading(false);
    }


    useEffect(() => {
        setSeries([]); 
        getSeriesByGenreId(genreId);
    }, [genreId]);


    return (
        <ContainerCard movies={ series } handleClick={ getSeriesByGenreId } genreId={ genreId } title={ `Series: ${categoryName}` }>
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