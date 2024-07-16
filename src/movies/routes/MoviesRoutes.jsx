import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, TitlePage } from '../pages'

const MoviesRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <HomePage /> }  />
            <Route path='/browse/:id' element={ <TitlePage /> } />

            <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
    )
}

export default MoviesRoutes