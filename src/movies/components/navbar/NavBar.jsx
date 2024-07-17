import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from '../search/Search'

const NavBar = () => {
    const [ scrolled, setScrolled ] = useState(false);

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
                <ul className='flex items-center gap-5'>
                    <li>Peliculas</li>
                    <li>Series</li>
                    <li>Categorias</li>
                    <li>Mi lista</li>
                </ul>

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
}


export default NavBar