import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../../context/MovieContext'
import ContainerCard from '../components/card/ContainerCard';
import Card from '../components/card/Card';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';

    const location = useLocation();
    let pathname = location.pathname;

    pathname = pathname.split("/");
    pathname = pathname[3].replace('%20', " ");

    const { inputValue, setInputValue, search, setSearch, moviesSeriesSearch, setMoviesSeriesSearch, onSearchTitle } = useContext(MovieContext);

    // Number -> prop to ContainerCard, this number indicate the function what ContainerCard should to called and adding a page en each called
    const [ number, setNumber ] = useState(8);


    useEffect(() => {
        setSearch(inputValue);

        onSearchTitle(search);
        setMoviesSeriesSearch([]);
    }, [search])

    useEffect(() => {
        setInputValue(pathname);
        onSearchTitle(pathname);
        setSearch(pathname);
    }, [])

    return (
        <ContainerCard movies={ moviesSeriesSearch } number={number} query={ search } title={ `Search: ${search}` }>
            {
                moviesSeriesSearch?.map(movie => (
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

export default SearchPage