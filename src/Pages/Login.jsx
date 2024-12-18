import React from 'react';
import { useContext, useRef, useState } from "react";
import { authContext } from "../Components/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
    const { singInUser, singInWithGoogle } = useContext(authContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error,setError] = useState("")
    const [success, setSuccess] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();

    const handleLogin = (e) => {
        
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(email, password);
        setSuccess(false);
        setLoginError('');

        singInUser(email, password)
            .then(result => {
                // console.log(result.user);
                e.target.reset()
               navigate('/')
               navigate(location.state.from)
           
            })
            .catch(error => {
                setError({ message: 'User email & password is not valid!!' });
            })

    }
    const HandleWithGoogle = () => {
        singInWithGoogle()
            .then(result => {
                navigate('/')
                navigate(location.state.from)
            })
    }

    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-[#1E2A47]">
                    <form onSubmit={handleLogin} className="card-body bg-[#1E2A47]">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered text-black" required />
                        </div>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input  type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered text-black" required />

                            <button
                            type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className='btn btn-xs absolute right-2 top-12'>
                        {
                            showPassword ?<FaEye></FaEye> :
                             <FaEyeSlash></FaEyeSlash>  
                        }
                    </button>

                            <label className="label">
                           
                                <a href="">Forgot Password? </a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                        <button className='btn font-bold border border-[#1E2A47] text-[#1E2A47] hover:text-white hover:bg-[#1E2A47]'>Login</button>
                        </div>
                        {error && <p className="text-red-500">{error.message}</p>}
                        <p className='ml-4 mb-4 cursor-pointer'>
                            Don't have an account? please <Link
                                to='/register' className="text-blue-500 hover:underline hover:text-white">Register</Link>
                        </p>
                    </form>
                    <div className="flex gap-1 justify-center items-center bg-[#1E2A47]">
                    <FcGoogle className="h-14 w-14 mb-3"></FcGoogle>
                    <button onClick={HandleWithGoogle} className="btn w-40 rounded-full bg-white text-[#1E2A47] hover:bg-[#1E2A47] hover:text-white ">Google Sing In</button>
                    </div>
                  
                   
                </div>
            </div>
        </div>
    );
};

export default Login;
