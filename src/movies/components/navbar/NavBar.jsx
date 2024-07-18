import React, { memo, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../search/Search'
import { MovieContext } from '../../../context/MovieContext';

const NavBar = memo(() => {
    const [ scrolled, setScrolled ] = useState(false);

    const { categoriesMovies, categoriesSeries } = useContext(MovieContext);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`pt-5 pb-5 box-shadow sticky top-0 left-0 z-10 ${scrolled ? 'opacity-80' : 'opacity-100'} hover:opacity-100`}>
            <nav className='flex items-center'>
                <h1 className='ml-4 mr-5 font-bold text-xl'><Link to='/'>MoviesApp</Link></h1>
                <div className='flex items-center gap-1'>
                    <li className="relative group">
                        <ul className="px-4 py-2 menu hover:bg-indigo-700 rounded cursor-pointer hover:opactity-80 cursor-pointer">Peliculas</ul>
                        <ul className="absolute lf-5 hidden mt-2 w-48 bg-indigo-900 text-white rounded-lg shadow-lg group-hover:block max-h-64 overflow-y-auto scrollbar">
                            {
                                categoriesMovies?.map((category) => (
                                    <Link key={category.id} id={category.id} to={`/browse/movies/${category.id}`}  state={{ name: category.name }}><li className="px-4 py-2 hover:bg-indigo-700 hover:opacity-85">{ category.name }</li></Link>
                                ))
                            }
                            
                        </ul>
                    </li>
                    <li className="relative group">
                        <ul className="px-4 py-2 menu hover:bg-indigo-700 rounded cursor-pointer">Series</ul>
                        <ul className="absolute lf-5 hidden mt-2 w-48 bg-indigo-900 text-white rounded-lg shadow-lg group-hover:block max-h-64 overflow-y-auto scrollbar">
                            {
                                categoriesSeries?.map((category) => (
                                    <Link key={category.id} id={category.id} to={`/browse/series/${category.id}`} state={{ name: category.name }}><li className="px-4 py-2  hover:bg-indigo-700 hover:opacity-85">{ category.name }</li></Link>
                                ))
                            }
                            
                        </ul>
                    </li>
                    <Link to='/browse/mylist' className='px-4 py-2  hover:bg-indigo-700 rounded-md'><li className='hover:opacity-85'>Mi lista</li></Link>
                </div>

                <div className='ml-auto mr-5 flex justify-end items-center gap-5'>
                    <Search />
                    <p>Sesion</p>
                    <p className='flex items-center gap-1'> Cerrar Sesión
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>

                    </p>
                </div>
            </nav>
        </header>
    )
});


export default NavBar