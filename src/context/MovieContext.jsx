import { createContext, useEffect, useState } from "react";
import { getMovies } from "../helpers/getMovies";
import { getMoviesByGenre } from "../helpers/GetMoviesByGenre";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    
    // Trends movies
    const [trendsMovies, setTrendsMovies] = useState([]);

    const [recommendationsMovies, setRecommendationsMovies] = useState([]);

    const [misteryRecommendations, setMisteryRecommendations] = useState([]);

    // Get TrendsMovies
    const getTrendsMovies = async () => {
        const data = await getMovies('/trending/movie/day?language=es-ES');
        setTrendsMovies(data);
    }

    useEffect(() => {
        getTrendsMovies();
    }, []);

    // Get Recommendations Movies
    const getRecommendationsMovies = async () => {
        const data = await getMovies('/movie/now_playing?language=es-ES');
        setRecommendationsMovies(data);
    }

    useEffect(() => {
        getRecommendationsMovies();
    }, []);

    const getMisteryRecommendations = async () => {
        // id 10751== misterio
        const data = await getMoviesByGenre(9648);
        setMisteryRecommendations(data);
    }


    useEffect(() => {
        getMisteryRecommendations();
    }, []);


    return (
        <MovieContext.Provider 
            value={
                { 
                    trendsMovies,
                    recommendationsMovies,
                    misteryRecommendations,
                }
            }
        >
            { children }
        </MovieContext.Provider>
    )
}

export default MovieProvider