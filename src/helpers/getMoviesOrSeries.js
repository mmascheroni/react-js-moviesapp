export const getMoviesOrSeries = async (
    endpointType = '',
    endpoint = '',
    page = 1
) => {
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
    const baseURL = import.meta.env.VITE_BASE_URL;
    const paramLanguage = import.meta.env.VITE_QUERY_PARAM_LANGUAGE;
    const paramPage = import.meta.env.VITE_QUERY_PARAM_PAGE;

    const url = `${baseURL}${endpointType}${endpoint}${paramLanguage}${paramPage}${page}`;

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
