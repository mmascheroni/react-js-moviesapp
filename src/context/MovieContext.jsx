import { createContext, useEffect, useReducer, useState } from "react";
import { getMovies } from "../helpers/getMovies";
import { getMoviesByGenre } from "../helpers/GetMoviesByGenre";
import { getSeries } from "../helpers/getSeries";
import listReducer from "../helpers/listReducer";

export const MovieContext = createContext();

const init = () => {
    return JSON.parse(localStorage.getItem('myList')) || [];
};

const MovieProvider = ({ children }) => {
    
    // HOME PAGE
    const [trendsMovies, setTrendsMovies] = useState([]);

    const [recommendationsMovies, setRecommendationsMovies] = useState([]);

    const [recommendationsSeries, setRecommendationsSeries] = useState([]);

    const [misteryRecommendations, setMisteryRecommendations] = useState([]);

    const [seriesTopRated, setSeriesTopRated] = useState([]);

    // My list
    const [myList, dispatch] = useReducer(listReducer, [], init);



    // Get TrendsMovies
    const getTrendsMovies = async () => {
        const data = await getMovies('/trending/movie/day');
        setTrendsMovies(data);
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

    const getMisteryRecommendations = async () => {
        // id 10751== misterio
        const data = await getMoviesByGenre(9648);
        setMisteryRecommendations(data);
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

    const onAddTitleToMyList = ({id, title, src}) => {
        const movie = {
            id: id,
            backdrop_path: src,
            original_title: title
        }

        handleAddToMyList(movie);
    }

    const onDeleteTitleToMyList = ({id}) => {
        handleDeleteToMyList(id);
    }


    return (
        <MovieContext.Provider 
            value={
                { 
                    trendsMovies,
                    recommendationsMovies,
                    misteryRecommendations,
                    recommendationsSeries,
                    seriesTopRated,
                    myList,
                    onAddTitleToMyList,
                    onDeleteTitleToMyList
                }
            }
        >
            { children }
        </MovieContext.Provider>
    )
}

export default MovieProvider