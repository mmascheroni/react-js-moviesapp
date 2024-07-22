import React, { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../context/MovieContext';
import ContainerCard from '../components/card/ContainerCard';
import Card from '../components/card/Card';
import { useLocation } from 'react-router-dom';
import Search from '../components/search/Search';

const SearchPage = () => {
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';
    const location = useLocation();
    let pathname = location.pathname;

    pathname = pathname.split("/");
    pathname = pathname[3].replace('%20', " ");

    const { 
        setInputValue, search, setSearch, moviesSeriesSearch, 
        setMoviesSeriesSearch, onSearchTitle, recommendationsMovies, 
        searchParams
    } = useContext(MovieContext);

    // Number -> prop to ContainerCard, this number indicate the function what ContainerCard should to called and adding a page en each called
    const [number, setNumber] = useState(8);
    const [showMessage, setShowMessage] = useState(false);
    let param = searchParams.get('q') || '';


    useEffect(() => {
        if ( param == '' ) {
            setSearch(param);
            setInputValue(param);
            setShowMessage(true);
            
        } else {
            setSearch(param);
            setInputValue(param);
            setShowMessage(false);
            onSearchTitle(search);
            setMoviesSeriesSearch([]);
        }
    }, []);

    useEffect(() => {
        if ( param == '' ) {
            setSearch(param);
            setInputValue(param);
            setShowMessage(true);
        } else {
            setSearch(param);
            setInputValue(param);
            setShowMessage(false);
            onSearchTitle(search);
            setMoviesSeriesSearch([]);
        }
    }, [search]);


    return (
        <div className='p-5'>  
            <Search />

            {
                showMessage 
                    ? (
                        <>
                            <h3 className='p-2 mt-2 text-center text-white font-bold text-lg'>Realiza tu busqueda deseada, mientras tanto te mostramos lo más visto</h3>
                            <ContainerCard showBtn={ false }>
                                {
                                    recommendationsMovies?.map(movie => (
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
                        </>
                    )
                    : (
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
        </div>
    )
}

export default SearchPage;
