import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

const PrivateRoutes = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();

    if ( logged ) {
        const lastPath = pathname + search;
        localStorage.setItem('lastPath', lastPath);
    }
    

    return (logged)
        ? children
        : <Navigate to="/login" />
}

export default PrivateRoutes