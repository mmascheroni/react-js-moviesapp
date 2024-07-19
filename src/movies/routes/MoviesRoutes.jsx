import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, MoviesPage, MyListPage, SearchPage, SeriesPage, TitlePage } from '../pages'

const MoviesRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <HomePage /> }  />
            <Route path='/browse/:id' element={ <TitlePage /> } />
            <Route path='/browse/movies/:genreId' element={ <MoviesPage/> } />
            <Route path='/browse/series/:genreId' element={ <SeriesPage /> } />
            <Route path='/browse/search/:searchQuery' element={ <SearchPage /> } />
            <Route path='/browse/mylist' element={ <MyListPage /> } />

            <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
    )
}

export default MoviesRoutes