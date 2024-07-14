export const getMoviesByGenre = async (genreId) => {
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
    const url =
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=' +
        genreId;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const res = await fetch(url, options);

    const data = await res.json();

    return data.results;
};
