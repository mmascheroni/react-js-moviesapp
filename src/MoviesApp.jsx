import Footer from "./movies/components/footer/Footer"
import NavBar from "./movies/components/navbar/NavBar"
import AppRouter from "./router/AppRouter"

function MoviesApp() {

  return (
    <>
      <NavBar />
      <AppRouter />
      <Footer/>
    </>
  )
}

export default MoviesApp
