// // export default UserProfile;
// import { useContext } from "react";
// import { authContext } from "../Components/AuthProvider"; // Adjust path as needed
// import { Link } from "react-router-dom";

// const UserProfile = () => {
//     const { user,favorites } = useContext(authContext);
//     const number=favorites.length
//     console.log(number);
    
   
//     // if (!user) {
//     //     return <div>Loading...</div>;
//     // }

//     return (
//         <div className="container mx-auto my-10">
//             <h1 className="text-3xl font-extrabold text-center mb-5">Welcome {user.displayName}</h1>
//             <div className="w-11/12 md:w-11/12  lg:w-1/2 mx-auto card p-6 shadow-lg rounded-lg bg-base-100 dark:bg-[#1E2A47]">
//                 <div className="flex items-center space-x-3 gap-1 md:gap-5">
//                     <img src={user.photoURL} alt="User Avatar" className="w-40 h-52 md:w-64 md:h-64 rounded-xl" />
//                     <div className="space-y-2">
//                         <h2 className="text-xl font-semibold">{user.displayName || "No name provided"}</h2>
//                         <p className="text-black dark:text-white">{user.email || "No email provided"}</p>
//                         <p className="text-black dark:text-white">Your total favorite movie : {number}</p>
//                         <div className="mt-5 flex-col md:flex-row">
//                     <button className="btn font-bold border border-[#1E2A47] text-[#1E2A47] hover:text-white hover:bg-[#1E2A47] ml-3"><Link to='/updateProfile'>Update</Link></button>
//                     <button className="btn font-bold border border-[#1E2A47] text-[#1E2A47] hover:text-white hover:bg-[#1E2A47] ml-3"><Link to='/favorite'>Go To Favorite</Link></button>
//                 </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserProfile;

import { useContext } from "react";
import { authContext } from "../Components/AuthProvider"; // Adjust path as needed
import { Link } from "react-router-dom";

const UserProfile = () => {
    const { user, favorites } = useContext(authContext);
    const number = favorites.length;

    return (
        <div className="container mx-auto my-10 px-4">
            <h1 className="text-3xl font-extrabold text-center mb-8">Welcome {user.displayName}</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar - 1/3 */}
                <div className="w-full lg:w-1/3 card p-6 shadow-lg rounded-lg bg-base-100 dark:bg-[#1E2A47]">
                    <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Dashboard Links</h2>
                    <ul className="space-y-3">
                        <li>
                            <Link to="/" className="block text-[#1E2A47] dark:text-white font-medium hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/favorite" className="block text-[#1E2A47] dark:text-white font-medium hover:underline">
                                Favorite Movies ({number})
                            </Link>
                        </li>
                        <li>
                            <Link to="/addMovie" className="block text-[#1E2A47] dark:text-white font-medium hover:underline">
                                Add a Movie
                            </Link>
                        </li>
                        <li>
                            <Link to="/allmovies" className="block text-[#1E2A47] dark:text-white font-medium hover:underline">
                                All Movies
                            </Link>
                        </li>
                        <li>
                            <Link to="/updateProfile" className="block text-[#1E2A47] dark:text-white font-medium hover:underline">
                                Update Profile
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* User Profile - 2/3 */}
                <div className="w-full lg:w-2/3 card p-6 shadow-lg rounded-lg bg-base-100 dark:bg-[#1E2A47]">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                        <img
                            src={user.photoURL}
                            alt="User Avatar"
                            className="w-52 h-52 md:w-64 md:h-64 rounded-xl"
                        />
                        <div className="space-y-2 text-center md:text-left">
                            <h2 className="text-xl font-semibold">{user.displayName || "No name provided"}</h2>
                            <p className="text-black dark:text-white">{user.email || "No email provided"}</p>
                            <p className="text-black dark:text-white">Your total favorite movies: {number}</p>
                            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                               
                                <button className="btn font-bold border border-[#1E2A47] text-[#1E2A47] hover:text-white hover:bg-[#1E2A47] "><Link to='/updateProfile'>Update</Link></button>
                                <button className="btn font-bold border border-[#1E2A47] text-[#1E2A47] hover:text-white hover:bg-[#1E2A47] ml-3"><Link to='/favorite'>Go To Favorite</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
