import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../search/Search'
import './navbar.css'

const NavBar = () => {
    return (
        <header className='pt-5 pb-5 box-shadow'>
            <nav className='flex items-center'>
                <h1 className='ml-4 mr-5 font-bold text-xl'><Link to='/'>MoviesApp</Link></h1>
                <ul className='flex items-center gap-5'>
                    <li>Inicio</li>
                    <li>Peliculas</li>
                    <li>Categorias</li>
                    <li>Trending</li>
                    <li>Mi lista</li>
                </ul>

                <div className='ml-auto mr-5 flex justify-end items-center gap-5'>
                    <Search />
                    <p>Sesion</p>
                    <p>Logout</p>
                </div>
            </nav>

            
        </header>
    )
}


export default NavBar