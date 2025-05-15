/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authContext } from "../Components/AuthProvider";

const UpdateProfile = () => {
    const { user, manageProfile } = useContext(authContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        const name =e.target.name.value;
        const image =e.target.image.value;

        try {
            manageProfile(name, image);
            setSuccess(true);
            navigate('/');
        } catch (err) {
        //    console.log(err);
           
        }
    };

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex">
            <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold mb-5">Update Your Profile</h1>
            </div>
            <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-[#1E2A47]">
                <form onSubmit={handleUpdate} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                             className="input input-bordered text-black"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-white">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="URL"
                             className="input input-bordered text-black"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">Profile updated successfully!</p>}

                    <div className="form-control mt-6">
                        <button type="submit" className="btn font-bold border border-[#1E2A47] text-[#1E2A47] hover:text-white hover:bg-[#1E2A47]">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default UpdateProfile;