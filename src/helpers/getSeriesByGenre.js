export const getSeriesByGenre = async (genreId, page = 1) => {
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
    const url = `https://api.themoviedb.org/3/discover/tv?language=es-ES&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`;

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

    const modifiedTitleKey = results.map((result) => ({
        ...result,
        original_title: result.name,
    }));

    return modifiedTitleKey;
};
