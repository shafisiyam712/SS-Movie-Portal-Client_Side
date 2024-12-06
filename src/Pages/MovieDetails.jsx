// import React from 'react';
// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// const MovieDetails = () => {
//     const data=useLoaderData();
//     // const { movieTitle} = useParams();
//     // console.log(movieTitle);
    
//     const [card,setCard]=useState({})
//     useEffect(() => {
//         const singleData = data.find(card => card._id==_id)
//         setCard(singleData)
//       }, [data,_id])
//       const {_id,moviePoster,movieTitle,genre,duration,releaseYear,rating,summary}= card || {} 
//     return (
//         <div className="w-11/12 mx auto">
             
//         <div className='card border border-rounded-xl transition  hover:scale-105 shadow-xl overflow-hidden p-4 mb-2 gap-3'>
//         <div className='mb-2  space-y-4 '>
//     <img className='w-full h-60 border rounded-xl' src={moviePoster} alt={`Cover picture of the title`} />
// </div>  
//   <div className='flex gap-2'>
//   <h4 className='font-extrabold text-xl'>{movieTitle}</h4>
//   </div>
  

//         <div className='mt-3 flex flex-col gap-3 mb-2'>
//         {/* <h4 className="font-bold">Eco-Features:</h4>
//               <div>
//                 1.{one} <br /> 
//                 2.{two} <br />
//                 3.{three} <br />  <br />
//               </div> */}
//             <h5 className='font-bold mt-2'>Duration: {duration}</h5>
//             <h5 className='font-bold mt-2'>Release Year: {releaseYear}</h5>
//             <h5 className='font-bold mt-2'>Rating: {rating}</h5>

//         </div>
//     </div>


//     </div>
//     );
// };

// export default MovieDetails;