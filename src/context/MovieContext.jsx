import { createContext, useEffect, useReducer, useState } from "react";
import listReducer from "../helpers/listReducer";
import { getGenres, getMoviesOrSeries, getMoviesOrSeriesByGenre } from "../helpers";
import { getSearchMoviesAndSeries } from "../helpers/getSearchMoviesAndSeries";

export const MovieContext = createContext();

const init = () => {
    return JSON.parse(localStorage.getItem('myList')) || [];
};


const MovieProvider = ({ children }) => {
    const endpointMovie = import.meta.env.VITE_ENDPOINT_MOVIE;
    const endpointSerie = import.meta.env.VITE_ENDPOINT_SERIE;
    const endpointTrendsMovies = import.meta.env.VITE_ENDPOINT_TRENDS_MOVIES;
    const endpointRecommendationsMovies = import.meta.env.VITE_ENDPOINT_RECOMMENDATIONS_MOVIES;
    const endpointPopularSeries = import.meta.env.VITE_ENDPOINT_TOP_SERIES;
    const endpointRatedSeries = import.meta.env.VITE_ENDPOINT_RATED_SERIES;

    const [ isLoading, setIsLoading ] = useState(false);
    
    // HOME PAGE
    const [trendsMovies, setTrendsMovies] = useState([]);

    const [recommendationsMovies, setRecommendationsMovies] = useState([]);

    const [recommendationsSeries, setRecommendationsSeries] = useState([]);

    const [misteryRecommendations, setMisteryRecommendations] = useState([]);

    const [seriesTopRated, setSeriesTopRated] = useState([]);

    const [ categoriesMovies, setCategoriesMovies ] = useState([]);

    const [ categoriesSeries, setCategoriesSeries ] = useState([]);

    const [ movies, setMovies ] = useState([]);

    const [ series, setSeries ] = useState([]);

    const [ inputValue, setInputValue ] = useState('');

    const [ search, setSearch ] = useState('');

    const [ moviesSeriesSearch, setMoviesSeriesSearch ] = useState([]);

    const [myList, dispatch] = useReducer(listReducer, [], init);

    const getTrendsMovies = async (page) => {
        setIsLoading(true);
        const data = await getMoviesOrSeries('', endpointTrendsMovies, page);
        setTrendsMovies(prevMovies => {
            const newMovies = data.filter(movie => !prevMovies.some(prevMovie => prevMovie.id === movie.id));
            return [...prevMovies, ...newMovies];
        });
        setIsLoading(false);
    }

    useEffect(() => {
        getTrendsMovies();
    }, []);


    const getRecommendationsMovies = async (page) => {
        setIsLoading(true);
        const data = await getMoviesOrSeries(endpointMovie, endpointRecommendationsMovies, page);
        setRecommendationsMovies(prevMovies => {
            const newMovies = data.filter(movie => !prevMovies.some(prevMovie => prevMovie.id === movie.id));
            return [...prevMovies, ...newMovies];
        });
        setIsLoading(false);
    }

    useEffect(() => {
        getRecommendationsMovies();
    }, []);


    const getRecommendationsSeries = async (page) => {
        setIsLoading(true);
        const data = await getMoviesOrSeries(endpointSerie, endpointPopularSeries, page);
        setRecommendationsSeries(prevSeries => {
            const newSeries = data.filter(serie => !prevSeries.some(prevSerie => prevSerie.id === serie.id));
            return [...prevSeries, ...newSeries];
        });
        setIsLoading(false);
    }

    useEffect(() => {
        getRecommendationsSeries();
    }, []);


    const getTopRatedSeries = async (page) => {
        setIsLoading(true);
        const data = await getMoviesOrSeries(endpointSerie, endpointRatedSeries, page);
        setSeriesTopRated(prevSeries => {
            const newSeries = data.filter(serie => !prevSeries.some(prevSerie => prevSerie.id === serie.id));
            return [...prevSeries, ...newSeries];
        });
        setIsLoading(false);
    }

    useEffect(() => {
        getTopRatedSeries();
    }, []);


    const getMisteryRecommendations = async (page = 1) => {
        setIsLoading(true);
        const data = await getMoviesOrSeriesByGenre(endpointMovie, 9648, page);
        setMisteryRecommendations(prevMovies => {
            const newMovies = data.filter(movie => !prevMovies.some(prevMovie => 
                prevMovie.id === movie.id));
            return [...prevMovies, ...newMovies];
        });
        setIsLoading(false);
    }

    useEffect(() => {
        getMisteryRecommendations();
    }, []);


    // Categories Movies

    const getCategoriesMovies = async() => {
        setIsLoading(true);
        const data = await getGenres('/genre/movie/list');
        setCategoriesMovies(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getCategoriesMovies();
    }, []);

    // Category Series
    const getCategoriesSeries = async() => {
        setIsLoading(true);
        const data = await getGenres('/genre/tv/list');
        setCategoriesSeries(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getCategoriesSeries();
    }, []);


    const getTrendsMoviesAndSetMovies = async (page) => {
        setIsLoading(true);
        const data = await getMoviesOrSeries('', endpointTrendsMovies, page);
        setMovies(prevMovies => {
            const newMovies = data.filter(movie => !prevMovies.some(prevMovie => prevMovie.id === movie.id));
            return [...prevMovies, ...newMovies];
        });
        setIsLoading(false);
    }

    const getRecommendationsMoviesAndSetMovies = async (page) => {
        setIsLoading(true);
        const data = await getMoviesOrSeries(endpointMovie, endpointRecommendationsMovies, page);
        setMovies(prevMovies => {
            const newMovies = data.filter(movie => !prevMovies.some(prevMovie => prevMovie.id === movie.id));
            return [...prevMovies, ...newMovies];
        });
        setIsLoading(false);
    }


    const getMoviesByGenre = async (genreId, page) => {
        setIsLoading(true);
        const data = await getMoviesOrSeriesByGenre(endpointMovie, genreId, page);
        setMovies(prevMovies => {
            const newMovies = data.filter(movie => !prevMovies.some(prevMovie => 
                prevMovie.id === movie.id));
            return [...prevMovies, ...newMovies];
        });
        setIsLoading(false);
    }


    const getSeriesByGenre = async (genreId, page) => {
        setIsLoading(true);
        const data = await getMoviesOrSeriesByGenre(endpointSerie, genreId, page);
        setSeries(prevSeries => {
            const newSeries = data.filter(serie => !prevSeries.some(prevSerie => 
                prevSerie.id === serie.id));
            return [...prevSeries, ...newSeries];
        });
        setIsLoading(false);
    }

    // SEARCH

    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    }

    const onSearchTitle = async (query = '', page = 1) => {
        setSearch(inputValue);
        setIsLoading(true);
        const data = await getSearchMoviesAndSeries(query, page);
        setMoviesSeriesSearch(prevMoviesSeries => {
            const newMoviesSeries = data.filter(movieSerie => !prevMoviesSeries.some(prevMovieSerie => 
                prevMovieSerie.id === movieSerie.id));
            return [...prevMoviesSeries, ...newMoviesSeries];
        });
        setIsLoading(false);
    }


    // MY LIST
    useEffect(() => {
        localStorage.setItem('myList', JSON.stringify(myList) || []);
    }, [myList]);


    const handleAddToMyList = (title) => {
        const action = {
            type: 'add',
            payload: title,
        };

        dispatch(action);
    };

    const handleDeleteToMyList = (id) => {
        const action = {
            type: 'delete',
            payload: id,
        };

        dispatch(action);
    };

    const onAddTitleToMyList = (props) => {
        const { title, id, ...movieData } = props;

        const movie = {
            ...movieData,
            id: id,
            original_title: title,
        }

        handleAddToMyList(movie);
    }

    const onDeleteTitleToMyList = (id) => {
        handleDeleteToMyList(id);
    }

    const isTitleInMyList = (id) => {
        return myList.some(movie => movie.id === id);
    };
    


    return (
        <MovieContext.Provider 
            value={
                { 
                    isLoading,
                    categoriesMovies,
                    categoriesSeries,
                    trendsMovies,
                    getTrendsMovies,
                    recommendationsMovies,
                    getRecommendationsMovies,
                    misteryRecommendations,
                    getMisteryRecommendations,
                    recommendationsSeries,
                    getRecommendationsSeries,
                    seriesTopRated,
                    myList,
                    onAddTitleToMyList,
                    onDeleteTitleToMyList,
                    isTitleInMyList,
                    getSeriesByGenre,
                    series,
                    setSeries,
                    getMoviesByGenre,
                    movies,
                    setMovies,
                    getTrendsMoviesAndSetMovies,
                    getRecommendationsMoviesAndSetMovies,
                    moviesSeriesSearch,
                    setMoviesSeriesSearch,
                    search,
                    setSearch,
                    inputValue,
                    setSearch,
                    setInputValue,
                    handleChangeInput,
                    onSearchTitle
                }
            }
        >
            { children }
        </MovieContext.Provider>
    )
}

export default MovieProvider