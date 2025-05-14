import { useNavigate } from "react-router-dom";
import logo2 from '../assets/Logo/icons8-movie-100.png'

const About = () => {
    const navigate = useNavigate()
    const GoHome = () => {
        navigate('/')
    }
    return (
        <div>
            <div className="flex justify-center text-center gap-3 space-y-3">
                 <img className='w-24 h-24 mt-2' src={logo2} alt="" />
                 <div>
                     <h1 className="font-extrabold text-3xl mt-10  dark:text-white text-[#121212]">SS Movies</h1>
                 </div>
                           
            </div>
            <div className="h-52 md:h-40 flex flex-col justify-center text-center w-full space-y-3 ">
                <h1 className="dark:text-white text-[#121212] text-2xl font-bold">SS Movie Portal</h1>
                <p className=" dark:text-white text-[#121212]">Welcome to SS Movie Portal, your ultimate destination for exploring, sharing, and collecting movies! Our platform is designed to bring movie <br /> enthusiasts together, creating a vibrant community where both users and admins collaborate to curate a vast and diverse movie collection.</p>

            </div>
           
            <div className="h-64 md:h-60 flex flex-col justify-center text-center w-full space-y-3">
                <h1 className="dark:text-white text-[#121212] text-2xl font-bold">What We Offer:</h1>
                <h1 className="dark:text-white text-[#121212] text-xl font-bold">A Comprehensive Movie Library</h1>
                <h1 className="dark:text-white text-[#121212] text-xl font-bold">Collaborative Contributions</h1>
                <h1 className="dark:text-white text-[#121212] text-xl font-bold">Personalized Favorite Lists</h1>
                <h1 className="dark:text-white text-[#121212] text-xl font-bold">User-Friendly Interface</h1>
                <h1 className="dark:text-white text-[#121212] text-xl font-bold">Community Spirit</h1>

            </div>
            <div className="h-52 md:h-32 flex flex-col justify-center text-center w-full space-y-3">
                <h1 className=" dark:text-white text-[#121212] text-2xl font-bold">Our Mission:</h1>
                <p className=" dark:text-white text-[#121212]">At SS Movie Portal, our mission is to celebrate the magic of movies by creating a collaborative space for discovery and curation. <br />
                    We aim to become the go-to platform for movie enthusiasts everywhere, fostering a love for cinema and connecting people through their shared passion.</p>
            </div>
            <div className="h-52 md:h-44 flex flex-col justify-center text-center w-full space-y-3 mt-10">
                <h1 className="dark:text-white text-[#121212] text-2xl font-bold my-3">So Join Us</h1>
                <p className="dark:text-white text-[#121212]">
                Whether you're here to explore, contribute, or build your personal collection, SS Movie Portal invites you to be part <br /> of our growing family. Together, let’s create the largest and most diverse movie database, one film at a time
                </p>
                <div className="my-8">
                <button onClick={GoHome} className="btn w-40 rounded-full bg-white text-[#1E2A47] hover:bg-[#1E2A47] hover:text-white ">Go Home</button>
                </div>

            </div>
        </div>
    );
};

export default About;