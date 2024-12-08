import { useNavigate } from "react-router-dom";


const About = () => {
    const navigate = useNavigate()
    const GoHome = () => {
        navigate('/')
    }
    return (
        <div>
            <div className="h-40 flex flex-col justify-center text-center w-full space-y-3">
                <h1 className="text-white text-2xl font-bold">SS Movie Portal</h1>
                <p className="text-white">Welcome to SS Movie Portal, your ultimate destination for exploring, sharing, and collecting movies! Our platform is designed to bring movie <br /> enthusiasts together, creating a vibrant community where both users and admins collaborate to curate a vast and diverse movie collection.</p>

            </div>
           
            <div className="h-60 flex flex-col justify-center text-center w-full space-y-3">
                <h1 className="text-white text-2xl font-bold">What We Offer:</h1>
                <h1 className="text-white text-xl font-bold">A Comprehensive Movie Library</h1>
                <h1 className="text-white text-xl font-bold">Collaborative Contributions</h1>
                <h1 className="text-white text-xl font-bold">Personalized Favorite Lists</h1>
                <h1 className="text-white text-xl font-bold">User-Friendly Interface</h1>
                <h1 className="text-white text-xl font-bold">Community Spirit</h1>

            </div>
            <div className="h-32 flex flex-col justify-center text-center w-full space-y-3">
                <h1 className="text-white text-2xl font-bold">Our Mission:</h1>
                <p className="text-white">At SS Movie Portal, our mission is to celebrate the magic of movies by creating a collaborative space for discovery and curation. <br />
                    We aim to become the go-to platform for movie enthusiasts everywhere, fostering a love for cinema and connecting people through their shared passion.</p>
            </div>
            <div className=" h-32 flex flex-col justify-center text-center w-full space-y-3 mt-10">
                <h1 className="text-white text-2xl font-bold mb-5 mt-5">So Join Us</h1>
                <p className="text-white">
                Whether you're here to explore, contribute, or build your personal collection, SS Movie Portal invites you to be part <br /> of our growing family. Together, let’s create the largest and most diverse movie database, one film at a time
                </p>
                <div>
                <button onClick={GoHome} className="btn w-40 rounded-full bg-white text-[#1E2A47] hover:bg-[#1E2A47] hover:text-white ">Go Home</button>
                </div>

            </div>
        </div>
    );
};

export default About;