import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';

const AllMovies = () => {
    const movie=useLoaderData()
    const [search,setSearch]=useState("")
    const [movieData,setMovieData]=useState(movie)
    useEffect(()=>{
        fetch(`https://milestone-10-server-side.vercel.app/movies?searchParams=${search}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
           setMovieData(data)
           
           
        })
    },[search])
    return (
        <div>
             <div className="text-center my-10">
            <h1 className="font-extrabold text-[#121212] dark:text-white text-3xl mb-5">Explore Our Vast Collections of movies</h1>
            <h2 className='p-2 pr-2'>There is a huge collections of movies added by our users and admins.</h2>
            <div className="w-[400px] mx-auto mt-5">
        <input 
           onChange={(e) => {
            console.log("Search Input:", e.target.value); // Debugging
            setSearch(e.target.value);
        }}
          type="text"
          name="search"
          placeholder="search"
          className="input input-bordered w-full text-black"
          required
        />
      </div>
            
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10 pl-7">
     
               {
                  
                  movieData.map( movies=> (
           
             <MovieCard key={movies._id} movies={movies}></MovieCard>))
             } 
             
             
             {/* w-2/3 md:w-1/5 mx-auto mt-10 */}
         </div>
         <div className='w-36 mx-auto my-10 pl-2'>
       <Link to={`/allmovies`}>
                     <button className='btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47]  hover:text-white hover:bg-[#1E2A47]'>See All Movies</button>
                </Link>
       </div> 
      
     </div>
    );
};

export default AllMovies;