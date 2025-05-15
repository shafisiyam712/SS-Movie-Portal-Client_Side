import React from 'react';
import MovieCard from './MovieCard';
import { Link, useLoaderData } from 'react-router-dom';

const Movies = () => {
    const data=useLoaderData()
    return (
        <div>
        <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 pl-7">
     
              {
                  
                  data.map( movies=> (
           
             <MovieCard key={movies._id} movies={movies}></MovieCard>))
             }
             
         </div>
        {/* w-2/3 md:w-1/5 mx-auto mt-16 */}
         <div className='w-40 mx-auto mt-16'>
       <Link to={`/allmovies`}>
                     <button className='btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47]  hover:text-white hover:bg-[#1E2A47]'>See All Movies</button>
                </Link>
       </div>
      
     
     </div>
    );
};

export default Movies;