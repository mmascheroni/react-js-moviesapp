import { useContext, useEffect, useState } from 'react';
import { MovieContext } from '../movies/context/MovieContext';

export const useMyList = (id) => {
    const {
        isTitleInMyList,
        onAddTitleToMyList,
        onDeleteTitleToMyList,
        myList,
    } = useContext(MovieContext);

    const [isInMyList, setIsInMyList] = useState(false);

    useEffect(() => {
        setIsInMyList(isTitleInMyList(id));
    }, [myList, id, isInMyList, isTitleInMyList]);

    const handleAddTitle = (e, props) => {
        e.preventDefault();
        e.stopPropagation();
        onAddTitleToMyList(props);
    };

    const handleDeleteTitle = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        onDeleteTitleToMyList(id);
    };

    return { isInMyList, handleAddTitle, handleDeleteTitle };
};
