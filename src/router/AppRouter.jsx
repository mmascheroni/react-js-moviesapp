import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MoviesRoutes from '../movies/routes/MoviesRoutes'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import LoginPage from '../auth/pages/LoginPage'
import NavBar from '../movies/components/navbar/NavBar'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={ 
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            } />
            <Route path='/*' element={ 
                <PrivateRoute>
                    <NavBar />
                    <MoviesRoutes />
                </PrivateRoute>
            } />
        </Routes>
    )
}

export default AppRouter