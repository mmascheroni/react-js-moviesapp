import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MoviesApp from './MoviesApp.jsx'
import './styles.css'
import MovieProvider from './context/MovieContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <MoviesApp />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
