export const getMoviesByGenre = async (genreId, page = 1) => {
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
    const url =
        'https://api.themoviedb.org/3/discover/movie?language=es-ES&sort_by=popularity.desc&with_genres=' +
        genreId +
        '&page=' +
        page;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const res = await fetch(url, options);

    const data = await res.json();

    const results = data.results;

    return results;
};
