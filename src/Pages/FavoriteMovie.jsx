import React, { useContext, useEffect } from 'react';
import { authContext } from '../Components/AuthProvider';
import Swal from 'sweetalert2';
const FavoriteMovie = () => {
    const { favorites,removeFavorite,user,clearUserDataOnLogout} = useContext(authContext);
    console.log(favorites);
    const {_id,MoviePoster,MovieTitle,Genre,Duration,ReleaseYear,Rating,Summary,userEmail}=  favorites
console.log(user.
  displayName);
  const name=user.
  displayName

  useEffect(() => {
    if (!user?.email) {
      clearUserDataOnLogout();
    }
  }, [user?.email, clearUserDataOnLogout]);

  const handleRemove = (movieId) => {
    
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeFavorite(movieId);
          Swal.fire({
            title: "Deleted!",
            text: "Your favorite movie has been deleted.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
  };   
    
    return (
        <div className='my-10'>
        <h1 className="text-3xl font-extrabold text-[#121212] dark:text-white  mb-4 text-center">{name}'s Favorite Movies : {favorites.length}</h1>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {favorites.length > 0 ? (
                favorites.map((movie) => (
                    <div key={movie._id} className="card border p-4 rounded-lg shadow-lg">
                        <img
                            src={movie.MoviePoster}
                            alt={movie.MovieTitle}
                            className="w-full h-60 object-cover rounded-lg mb-4"
                        />
                        <div className='flex flex-col text-center items-center space-y-2'>
                        <h2 className="font-bold text-xl mb-2">{movie.MovieTitle}</h2>
                        <p className="dark:text-white text-black">Genre: {movie.Genre}</p>
                        <p className="dark:text-white text-black">Duration: {movie.Duration}min</p>
                        <p className="dark:text-white text-black">Release Year: {movie.ReleaseYear}</p>
                        <p className="dark:text-white text-black">Rating: {movie.Rating}</p>

                        <button   onClick={() => handleRemove(movie._id)} className='btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] w-40 hover:text-white hover:bg-[#1E2A47]'>Delete Movie</button>
                        </div>
                       
                        
                    </div>
                ))
            ) : (
              <div className="text-center">
                <p className="text-[#121212] dark:text-white ">No favorite movies added yet</p>
              </div>
                
            )}
        </div>
    </div>
    );
};

export default FavoriteMovie;