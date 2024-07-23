import React, { createContext, useEffect, useReducer, useState } from 'react'
import { authReducer } from './authReducer';
import { types } from '../types/types';
export const AuthContext = createContext();


const initialState = {
    logged: false,
}

const init = () => {
    const user = JSON.parse( localStorage.getItem('user') );

    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState, init );

    const [ isDesktop, setIsDesktop ] = useState(false);

    const [ isTablet, setIsTablet ] = useState(false);

    const [ isMobile, setIsMobile ] = useState(false);


    const desktopMediaQuery = window.matchMedia('(min-width: 950px)');

    const tabletMediaQuery = window.matchMedia('(max-width: 920px)');

    const mobileMediaQuery = window.matchMedia('(max-width: 523px)');

    desktopMediaQuery.addEventListener('change', (e) => {
        if ( e.matches ) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    });


    tabletMediaQuery.addEventListener('change', (e) => {
        if ( e.matches ) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
    });


    mobileMediaQuery.addEventListener('change', (e) => {
        if ( e.matches ) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    })

    const updateMediaQueries = () => {
        const desktopMediaQuery = window.matchMedia('(min-width: 950px)');
        const tabletMediaQuery = window.matchMedia('(max-width: 920px)');
        const mobileMediaQuery = window.matchMedia('(max-width: 523px)');

        setIsDesktop(desktopMediaQuery.matches);
        setIsTablet(tabletMediaQuery.matches);
        setIsMobile(mobileMediaQuery.matches);
    };

    
    useEffect(() => {
        updateMediaQueries();
    }, []);

    const login = ( name = '' ) => {
        const user = {
            name
        }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = ( ) => {
        const action = {
            type: types.logout,
        }

        localStorage.removeItem('user');

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{ 
            ...authState,
            login: login,
            logout: logout,
            isDesktop,
            isMobile,
            isTablet
        }}>
            { children }
        </AuthContext.Provider >
    )
}
