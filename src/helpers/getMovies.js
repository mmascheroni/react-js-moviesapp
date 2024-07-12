export const getMovies = async (endpoint) => {
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
    const url = 'https://api.themoviedb.org/3' + endpoint;

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
