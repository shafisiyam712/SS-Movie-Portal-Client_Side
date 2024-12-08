import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({movies}) => {
    const {_id,MoviePoster,MovieTitle,Genre,Duration,ReleaseYear,Rating,Summary}= movies 
   
    return (
        <div className="w-11/12 mx auto">
             
            <div className='card border border-rounded-xl transition  hover:scale-105 shadow-xl overflow-hidden p-4 mb-2 gap-3'>
            <div className='mb-2  space-y-4 '>
        <img className='w-full h-60 border rounded-xl' src={MoviePoster} alt={`Cover picture of the title`} />
    </div>  
      <div className='flex gap-2 justify-center'>
      <h4 className='font-extrabold text-xl'>{MovieTitle}</h4>
      </div>
      

            <div className='mt-3 flex flex-col gap-3 mb-2'>
           
                <h5 className='font-bold mt-2'>Duration: {Duration}min</h5>
                <h5 className='font-bold mt-2'>Release Year: {ReleaseYear}</h5>
                <h5 className='font-bold mt-2'>Rating: {Rating}</h5>
                    <div className='md:ml-24'>
 <Link to={`/movies/${_id}`}>
                     <button className='btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] w-1/2 hover:text-white hover:bg-[#1E2A47]'>See Details</button>
                </Link>
                    </div>
               
               
            </div>
        </div>

      
        </div>
    );
};

export default MovieCard;