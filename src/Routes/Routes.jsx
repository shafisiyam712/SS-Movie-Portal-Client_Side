import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"
import Home from "../Pages/Home"
import Movies from "../Components/Movies"
import AllMovies from "../Pages/AllMovies"
import AddMovies from "../Pages/AddMovies"
import MyFav from "../Pages/MyFav"
import About from "../Pages/About"
import Register from "../Pages/Register"
import Login from "../Pages/Login"


const routes = createBrowserRouter([
    {   
        path: '/',
        element: <MainLayout></MainLayout>,
        //errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allmovies',
                element: <AllMovies></AllMovies>,
            },
            {
                path: '/addmovies',
                element: <AddMovies></AddMovies>,
            },
            {
                path: '/myfav',
                element: <MyFav></MyFav>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
           
        ] 
        
    },

       

   
])
export {routes}