import React from 'react';
// import MovieCard from './MovieCard';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';

const AllMovies = () => {
    const data=useLoaderData()
    return (
        <div>
        <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
     
               {
                  
                  data.map( movies=> (
           
             <MovieCard key={movies._id} movies={movies}></MovieCard>))
             } 
             
             
             
         </div>
    
     
     </div>
    );
};

export default AllMovies;