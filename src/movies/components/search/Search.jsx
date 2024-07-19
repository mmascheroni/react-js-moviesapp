import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import { Link } from 'react-router-dom';

const Search = () => {

    const { inputValue, handleChangeInput, onSearchTitle } = useContext(MovieContext);

    return (
        <form className='flex gap-2 justify-center'>
            <input 
                placeholder='Busca tu titulo preferido' 
                className='rounded-b rounded-t pl-2 pr-2 box-shadow text-black'
                onChange={ handleChangeInput }
                value={ inputValue }
            />
            <Link to={ `/browse/search/${inputValue}` }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6" onClick={ () => onSearchTitle( inputValue ) }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </Link>
        </form>
    )
}

export default Search