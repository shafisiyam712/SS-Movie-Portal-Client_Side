import React, { useContext, useEffect } from 'react';
import { authContext } from '../Components/AuthProvider';
import Swal from 'sweetalert2';
const FavoriteMovie = () => {
    const { favorites,removeFavorite,user,clearUserDataOnLogout} = useContext(authContext);
    console.log(favorites);
    const {_id,MoviePoster,MovieTitle,Genre,Duration,ReleaseYear,Rating,Summary,userEmail}=  favorites

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
        <div className='mt-5'>
        <h1 className="text-2xl font-bold mb-4 text-center">Your Favorite Movies</h1>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                        <p className="text-white">Genre: {movie.Genre}</p>
                        <p className="text-white">Duration: {movie.Duration}min</p>
                        <p className="text-white">Release Year: {movie.ReleaseYear}</p>
                        <p className="text-white">Rating: {movie.Rating}</p>

                        <button   onClick={() => handleRemove(movie._id)} className='btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] w-40 hover:text-white hover:bg-[#1E2A47]'>Delete Movie</button>
                        </div>
                       
                        
                    </div>
                ))
            ) : (
                <p className="text-white text-center">No favorite movies added yet</p>
            )}
        </div>
    </div>
    );
};

export default FavoriteMovie;