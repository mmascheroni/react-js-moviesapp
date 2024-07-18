export const getMoviesOrSeriesByGenre = async (
    endpointType = '',
    genreId = '',
    page = 1
) => {
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
    const baseURL = import.meta.env.VITE_BASE_URL;
    const endpointDiscover = import.meta.env.VITE_ENDPOINT_DISCOVER;
    const paramLanguage = import.meta.env.VITE_QUERY_PARAM_LANGUAGE;
    const paramPage = import.meta.env.VITE_QUERY_PARAM_PAGE;
    const paramGenre = import.meta.env.VITE_QUERY_PARAM_GENRE;

    const url = `${baseURL}${endpointDiscover}${endpointType}${paramLanguage}${paramGenre}${genreId}${paramPage}${page}`;

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
