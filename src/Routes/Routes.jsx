import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"
import Home from "../Pages/Home"
// import Movies from "../Components/Movies"
import AllMovies from "../Pages/AllMovies"
// import AddMovies from "../Pages/AddMovies"
import MyFav from "../Pages/MyFav"
import About from "../Pages/About"
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import PrivateRoute from "../Components/PrivateRoute"
// import MovieDetails from "../Pages/MovieDetails"
import AddMovie from "../Pages/AddMovie"


const routes = createBrowserRouter([
    {   
        path: '/',
        element: <MainLayout></MainLayout>,
        //errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children:[
                    // {
                    //     path: '/',
                    //     element: <Movies></Movies>,
                    //     loader: ()=>fetch('http://localhost:5000/movies/topRated'),
                    //   },
                ]
            },
            {
                path: '/addMovie',
                element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>,
            },
            // {
            //     path: '/movies/_id',
            //     element: <MovieDetails></MovieDetails>,
            //     //loader: ()=>fetch('http://localhost:5000/movies/topRated'),
            //     loader: ({ params }) => fetch(`http://localhost:5000/movies/topRated/${params.id}`)
            // },
            {
                path: '/allmovies',
                element: <AllMovies></AllMovies>,
            },
            // {
            //     path: '/addmovies',
            //     element: <PrivateRoute> <AddMovies></AddMovies></PrivateRoute>,
            // },
            {
                path: '/myfav',
                element:<PrivateRoute> <MyFav></MyFav></PrivateRoute>,
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