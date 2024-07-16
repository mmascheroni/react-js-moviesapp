import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MoviesRoutes from '../movies/routes/MoviesRoutes'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={ <MoviesRoutes /> } />
        </Routes>
    )
}

export default AppRouter