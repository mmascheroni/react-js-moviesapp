import { createContext, useEffect, useReducer, useState } from "react";
import { getMovies } from "../helpers/getMovies";
import { getMoviesByGenre } from "../helpers/GetMoviesByGenre";
import { getSeries } from "../helpers/getSeries";
import listReducer from "../helpers/listReducer";
import { getGenres } from "../helpers/getGenres";

export const MovieContext = createContext();

const init = () => {
    return JSON.parse(localStorage.getItem('myList')) || [];
};


const MovieProvider = ({ children }) => {

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

    // My list
    const [myList, dispatch] = useReducer(listReducer, [], init);

    const getMoviesByGenreId = async (id, page = 1) => {
        setIsLoading(true);
        const data = await getMoviesByGenre(id, page);
        setMovies(prevMovies => {
            const newMovies = data.filter(movie => !prevMovies.some(prevMovie => 
                prevMovie.id === movie.id));
            return [...prevMovies, ...newMovies];
        });
        setIsLoading(false);
    }

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


    // Get TrendsMovies
    const getTrendsMovies = async (page = 1) => {
        setIsLoading(true);
        const data = await getMovies('/trending/movie/day', page);
        setTrendsMovies(prevMovies => {
            const newMovies = data.filter(movie => !prevMovies.some(prevMovie => prevMovie.id === movie.id));
            return [...prevMovies, ...newMovies];
        });

        setIsLoading(false);
    }

    useEffect(() => {
        getTrendsMovies();
    }, []);

    // Get Recommendations Movies
    const getRecommendationsMovies = async () => {
        const data = await getMovies('/movie/now_playing');
        setRecommendationsMovies(data);
    }

    useEffect(() => {
        getRecommendationsMovies();
    }, []);

    // Get Recommendations Series
    const getRecommendationsSeries = async () => {
        const data = await getSeries('/popular');
        setRecommendationsSeries(data);
    }

    useEffect(() => {
        getRecommendationsSeries();
    }, []);

    // Get Recommendations Series
    const getTopSeriesRated = async () => {
        const data = await getSeries('/top_rated');
        setSeriesTopRated(data);
    }

    useEffect(() => {
        getTopSeriesRated();
    }, []);


    // Get Mistery Movies Recommendations

    const getMisteryRecommendations = async (page) => {
        // id 9648== misterio
        setIsLoading(true);
        const data = await getMoviesByGenre(9648);
        setMisteryRecommendations(prevMovies => {
            const newMovies = data.filter(movie => !prevMovies.some(prevMovie => prevMovie.id === movie.id));
            return [...prevMovies, ...newMovies];
        });
        setIsLoading(false);
    }


    useEffect(() => {
        getMisteryRecommendations();
    }, []);



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
                    setIsLoading,
                    categoriesMovies,
                    categoriesSeries,
                    movies,
                    getMoviesByGenreId,
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
                    isTitleInMyList
                }
            }
        >
            { children }
        </MovieContext.Provider>
    )
}

export default MovieProvider