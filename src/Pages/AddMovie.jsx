
import ReactStars from 'react-simple-star-rating';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { authContext } from '../Components/AuthProvider';

const AddMovie = () => {
    const {user}=useContext(authContext)
    const [error,setError] = useState("")
    // const [rating, setRating] = useState(0);

    //     // Function to handle rating change
    //     const handleRatingChange = (newRating) => {
    //         setRating(newRating); // Update the rating state with the selected value
    //     };
   const userEmail=user.email
    

    const handleAddmovie = e => {
        setError("")
        e.preventDefault();

        const MoviePoster = e.target.photoUrl.value;
        const MovieTitle = e.target.movieTitle.value;
        const Genre = e.target.genre.value;
        const Duration = parseInt(e.target.duration.value);
        const ReleaseYear = parseInt(e.target.releaseYear.value);
        const Rating = parseFloat(e.target.rating.value);
        const Summary = e.target.summary.value;

        const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(:\d+)?(\/[^\s]*)?$/i;

        if (!urlRegex.test(MoviePoster)) {
            setError("Invalid URL: Please enter a valid link.");
            return;
        }
        if (!MovieTitle || MovieTitle.length < 2) {
            setError("Invalid Movie Title: Please enter at least 2 characters.");
            return; 
        }
        if (isNaN(Duration) || Duration <= 60) {
            setError("Invalid Duration: Please enter a number greater than 60 minutes.");
            return; 
        }
        if (!Summary.trim() || Summary.length < 10) {
            setError("Summary must be at least 10 characters long and cannot be empty.");
            return;
        }
        const newMovie = { MoviePoster, MovieTitle, Genre, Duration, ReleaseYear, Rating, Summary ,userEmail}
        console.log(newMovie)

        // send data to the server and database
        fetch('https://milestone-10-server-side.vercel.app/movies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your movie added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                }
            })

    }



    return (
        <div className='lg:w-3/4 mx-auto'>
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Add Movie</h1>
                <p className="py-6">
                   Add your movie.Just fill up the form with your movie information.It will up to our website.You can find it All movies section and if it is high rated then you can see it in our home page!!
                </p>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl rounded-xl">
                <form onSubmit={handleAddmovie} className="card-body bg-[#1E2A47] rounded-xl">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-white">Photo URL</span>
                            </label>
                            <input type="text" name='photoUrl' placeholder="Photo url" className="input input-bordered text-black" required />

                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-white">Movie Title</span>
                            </label>
                            <input type="text" name='movieTitle' placeholder="Title" className="input input-bordered text-black" required />
                        </div>

                    </div>
                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-white">Genre</span>
                            </label>
                            <select name="genre" className="select select-bordered text-black" required>
                            <option value="" disabled selected>Select Genre</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Horror">Horror</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                                <option value="Fantasy">Fantasy</option>
                            </select>

                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-white">Duration</span>
                            </label>
                            <input type="number" name='duration' placeholder="Duration" className="input input-bordered text-black" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-white">Release Year</span>
                            </label>
                            {/* <input type="number" name='releaseYear' placeholder="Release Year" className="input input-bordered" required /> */}
                            <select name="releaseYear" className="select select-bordered text-black" required>
                            <option value="" disabled selected>Select Year</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                            </select>
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-white">Rating</span>
                            </label>
                            <input type='text' name='rating' placeholder="Rating" className="input input-bordered text-black" required />

                            {/* <ReactStars
                                count={5} // Number of stars
                                onChange={handleRatingChange} // Handle rating change
                                size={30} // Star size
                                value={rating} // Set the value of the stars
                                activeColor="#ffd700" // Color of active stars
                            /> */}

                            {/* <input
                                type="hidden"
                                name="rating"
                                value={rating}
                            /> */}
                        </div>
                    </div>
                    <br />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Summary</span>
                        </label>

                        <textarea className='border text-black' name="summary" id="" cols="30" rows='5'></textarea>
                    </div>


                    {error && <p className="text-red-500">{error}</p>}
                    <div className="form-control mt-6">
                    <button className='btn font-bold border border-[#1E2A47] rounded-full w-2/6 mx-auto text-[#1E2A47]  hover:text-white hover:bg-[#1E2A47]'>Add movie</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMovie;