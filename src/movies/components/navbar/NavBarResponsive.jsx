import React, { memo, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MovieContext } from '../../context/MovieContext';
import { AuthContext } from '../../../auth/context/AuthContext';

const NavBarResponsive = memo(() => {
    const [ scrolled, setScrolled ] = useState(false);

    const { categoriesMovies, categoriesSeries } = useContext(MovieContext);

    const { isMobile, isDesktop } = useContext(AuthContext);

    const { user, logout } = useContext( AuthContext );

    const navigate = useNavigate();

    const onLogout = () => {
        logout();

        navigate('/login', {
            replace: true
        })
    }


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
        <header className={`pt-5 pb-5 box-shadow sticky top-0 left-0 z-20 ${scrolled ? 'opacity-80' : 'opacity-100'} hover:opacity-100`}>
            <nav className={`flex ${ !isDesktop ? 'justify-between items-center' : 'items-center' }`}>
                <h1 className='ml-4 mr-5 font-bold text-xl'><Link to='/'>MoviesApp</Link></h1>
                {
                    isDesktop 
                        ? ( <>
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
                                    <Link to='/browse/search/?q='>
                                        <button className='py-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                            </svg>
                                        </button>
                                    </Link>
                                    <p className='flex items-center gap-1 font-bold text-indigo-200 user-name'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                        { user?.name }
                                    </p>
                                    <button className='flex items-center gap-1 user-name' onClick={  onLogout }> Cerrar Sesión
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                        </svg>

                                    </button>
                                </div>
                            </>
                        )
                        // MOBILE
                        : (
                            <>
                                <div className='flex items-center gap-1 pr-3'>
                                    <Link to='/browse/search/?q='>
                                        <button className='py-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                            </svg>
                                        </button>
                                    </Link>
                                    <ul className="relative group">
                                        <ul className="px-4 py-2 menu hover:bg-indigo-700 rounded cursor-pointer">
                                            <p className='flex gap-1 font-bold text-indigo-200 user-name'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                            {user?.name}
                                            </p>
                                        </ul>

                                        <ul className="absolute hidden mt-2 w-40 bg-indigo-900 text-white rounded-lg shadow-lg right-0.5 group-hover:block">
                                            <li className="relative group-movies">
                                                <ul className="px-4 py-2 hover:bg-indigo-700 rounded cursor-pointer  menu-left z-10">Peliculas</ul>
                                                <ul className="absolute hidden right-full top-0 w-48 bg-indigo-900 text-white rounded-lg shadow-lg h-600 overflow-y-auto scrollbar group-movies-hover">
                                                    {
                                                        categoriesMovies?.map((category) => (
                                                            <Link key={category.id} id={category.id} to={`/browse/movies/${category.id}`}  state={{ name: category.name }}><li className="px-4 py-2 hover:bg-indigo-700 hover:opacity-85">{ category.name }</li></Link>
                                                        ))
                                                    }
                                                </ul>
                                            </li>

                                            <li className="relative group-series">
                                                <ul className="px-4 py-2 hover:bg-indigo-700 rounded cursor-pointer menu-left z-10">Series</ul>
                                                <ul className="absolute hidden right-full top-0 w-48 bg-indigo-900 text-white rounded-lg shadow-lg h-600 overflow-y-auto scrollbar group-series-hover">
                                                    {
                                                        categoriesSeries?.map((category) => (
                                                            <Link key={category.id} id={category.id} to={`/browse/series/${category.id}`} state={{ name: category.name }}><li className="px-4 py-2  hover:bg-indigo-700 hover:opacity-85">{ category.name }</li></Link>
                                                        ))
                                                    }
                                                </ul>
                                            </li>

                                            <Link to='/browse/mylist'>
                                                <li className='px-4 py-2  hover:bg-indigo-700 rounded-lg shadow-lg'>
                                                    Mi lista
                                                </li>
                                            </Link>

                                            <button className='flex items-center gap-1 px-4 py-2  hover:bg-indigo-700 rounded-lg shadow-lg' onClick={  onLogout }> Cerrar Sesión
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                                </svg>
                                            </button>
                                        </ul>
                                    </ul>
                                </div>
                            </>
                        )
                }
                
            </nav>
        </header>
    )
});


export default NavBarResponsive