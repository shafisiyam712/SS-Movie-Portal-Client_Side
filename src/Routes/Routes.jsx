import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"
import Home from "../Pages/Home"
import Movies from "../Components/Movies"


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
           
        ] 
        
    },

        {
            path: '/movies',
            element: <Movies></Movies>,
        }

   
])
export {routes}