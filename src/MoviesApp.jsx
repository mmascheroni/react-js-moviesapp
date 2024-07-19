import { AuthProvider } from "./auth/context/AuthContext"
import ErrorBoundary from "./exceptions/ErrorBoundary"
import Footer from "./movies/components/footer/Footer"
import AppRouter from "./router/AppRouter"

function MoviesApp() {

  return (
    <ErrorBoundary>
      <AuthProvider>
        <AppRouter />
        <Footer/>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default MoviesApp
