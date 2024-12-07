import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"
import Home from "../Pages/Home"
import Movies from "../Components/Movies"
import AllMovies from "../Pages/AllMovies"
import About from "../Pages/About"
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import PrivateRoute from "../Components/PrivateRoute"
import MovieDetails from "../Pages/MovieDetails"
import AddMovie from "../Pages/AddMovie"
import ErrorPage from "../Pages/ErrorPage"
import FavoriteMovie from "../Pages/FavoriteMovie"
import UpdateMovie from "../Pages/UpdateMovie"


const routes = createBrowserRouter([
    {   
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children:[
                    {
                        path: '/',
                        element: <Movies></Movies>,
                        loader: ()=>fetch('http://localhost:5000/movies/topRated'),
                      },
                ]
            },
            {
                path: '/addMovie',
                element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>,
            },
            {
                path: '/movies/:id',
                element: <MovieDetails></MovieDetails>,
                //loader: ()=>fetch('http://localhost:5000/movies/topRated'),
                loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`)
            },
            {
                path: '/allmovies',
                element: <AllMovies></AllMovies>,
                loader: ()=>fetch('http://localhost:5000/movies'),
            },
          
            {
                path: '/favorite',
                element:<PrivateRoute> <FavoriteMovie></FavoriteMovie></PrivateRoute>,
            },
            {
                path: '/update/:id',
                element:<PrivateRoute> <UpdateMovie></UpdateMovie></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`)
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