import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const MoviesRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <HomePage /> }  />

            <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
    )
}

export default MoviesRoutes