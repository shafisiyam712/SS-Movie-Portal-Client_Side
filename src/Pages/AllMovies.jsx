import React from 'react';
// import MovieCard from './MovieCard';
import { Link, useLoaderData } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';

const AllMovies = () => {
    const data=useLoaderData()
    return (
        <div>
             <div className="text-center my-14 space-y-2 ">
            <h1 className="font-extrabold text-[#1E2A47] text-2xl">Explore Our Vast Collections of movies</h1>
            <h2>Join us as we traverse lush forests, scale majestic mountains, and uncover the secrets of the wild—sustainably and passionately. Your next adventure awaits!</h2>
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
     
               {
                  
                  data.map( movies=> (
           
             <MovieCard key={movies._id} movies={movies}></MovieCard>))
             } 
             
             
             
         </div>
         <div className='w-1/5 mx-auto mt-10'>
       <Link to={`/allmovies`}>
                     <button className='btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] w-1/2 hover:text-white hover:bg-[#1E2A47]'>See All Movies</button>
                </Link>
       </div> 
      
     </div>
    );
};

export default AllMovies;