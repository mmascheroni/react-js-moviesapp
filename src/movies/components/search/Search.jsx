import React, { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';

const Search = () => {
    const { inputValue, handleChangeInput, onSearchTitle } = useContext(MovieContext);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSearchTitle(inputValue); // Llama a onSearchTitle con el valor del input
    }

    return (
        <form className='flex gap-2 justify-center' onSubmit={handleOnSubmit}>
            <input 
                placeholder='Busca tu titulo preferido' 
                className='rounded-b rounded-t pl-2 pr-2 box-shadow text-black'
                onChange={handleChangeInput}
                value={inputValue}
                type='text' 
            />
            <button type="submit" className="bg-transparent border-0 p-0 m-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </form>
    );
}

export default Search;
