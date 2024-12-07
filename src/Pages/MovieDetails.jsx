import React from 'react';
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const MovieDetails = () => {
  const navigate=useNavigate()
    const data=useLoaderData();
    
      const {_id,MoviePoster,MovieTitle,Genre,Duration,ReleaseYear,Rating,Summary,userEmail}=  data 
    console.log(data);

    const handleDelete = _id => {
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
      }).then((result) => {
          if (result.isConfirmed) {

              fetch(`http://localhost:5000/movies/${_id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      // console.log(data);
                      if (data.deletedCount) {
                          Swal.fire({
                              title: "Deleted!",
                              text: "Your movie has been deleted.",
                              icon: "success"
                          });
                          navigate('/allmovies')

                      }
                  })

          }
      });
    }
    
    return (
        <div className="">
             
        <div className='card w-2/3 mx-auto mt-10 border border-rounded-xl shadow-xl overflow-hidden p-4 mb-2 gap-3'>
        <div className='mb-2  space-y-4 '>
    <img className='w-full h-60 border rounded-xl' src={MoviePoster} alt={`Cover picture of the title`} />
</div>  
  <div className='flex gap-2'>
  <h4 className='font-extrabold text-xl'>{MovieTitle}</h4>
  </div>
  

        <div className='mt-3 flex flex-col gap-3 mb-2'>
        {/* <h4 className="font-bold">Eco-Features:</h4>
              <div>
                1.{one} <br /> 
                2.{two} <br />
                3.{three} <br />  <br />
              </div> */}
            <h5 className='font-bold mt-2'>Duration: {Duration}</h5>
            <h5 className='font-bold mt-2'>Release Year: {ReleaseYear}</h5>
            <h5 className='font-bold mt-2'>Rating: {Rating}</h5>
            <h5 className='font-bold mt-2'>User: {userEmail}</h5>

        </div>
    </div>
    <div className='flex justify-center gap-5 mt-10'>
       <Link to={`/favorite`}>
                     <button className='btn  font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] w-40 hover:text-white hover:bg-[#1E2A47]'>Add to favorite</button>
                </Link>
      
                     <button  onClick={() => handleDelete(_id)} className='btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] w-40 hover:text-white hover:bg-[#1E2A47]'>Delete Movie</button>
               
       <Link to={`/update/${_id}`}>
                     <button className='btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] w-40 hover:text-white hover:bg-[#1E2A47]'>Update Movie</button>
                </Link>
       </div>
       

    </div>
    );
};

export default MovieDetails;