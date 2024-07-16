export const getSeries = async (endpoint = '') => {
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
    const url =
        'https://api.themoviedb.org/3/tv' + endpoint + '?language=es-ES';

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
