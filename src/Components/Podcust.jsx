import React from 'react';
import { Link } from 'react-router-dom';

const Podcust = () => {
    return (
        <div className="w-11/12 mx-auto mt-20">
            <h1 className="text-center font-extrabold text-[#121212] text-3xl  dark:text-white mb-5">This Month Director Talks</h1>
            <h2 className='text-center mb-5'>Watch famous director interview and there plans for Upcoming movies</h2>
            <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 mt-14">
                <div className='card border border-rounded-xl border-[#1E2A47] shadow-xl overflow-hidden p-4 mb-2 gap-3'>
                    <div className='mb-2  space-y-4 h-64'>
                        <img className='w-full h-full object-cover border' src="https://i.ibb.co.com/Yf1jV6C/Screenshot-107.png" />
                    </div>
                    <div className=''>
                        <h4 className='font-extrabold text-xl text-center'>Christopher Nolan</h4>
                    </div>
                    <div className='my-1 text-center'>
                        <h4 className="font-bold">UK,USA</h4>
                        <Link
                            to='https://www.youtube.com/watch?v=0CaDZamA2ok' className="text-blue-500 hover:underline hover:text-blue-700" target="_blank">Click To Watch</Link>

                    </div>
                </div>

                <div className='card border border-rounded-xl  border-[#1E2A47] shadow-xl overflow-hidden p-4 mb-2 gap-3'>
                    <div className='mb-2  space-y-4 h-64'>
                        <img className='w-full h-full border' src="https://i.ibb.co.com/G3kcYPR/Screenshot-108.png" />
                    </div>
                    <div className=''>
                        <h4 className='font-extrabold text-xl text-center'>Tarantino</h4>
                    </div>
                    <div className='my-1 text-center'>
                        <h4 className="font-bold">USA,CK</h4>
                        <Link
                            to='https://www.youtube.com/watch?v=6V1Sm0WCtHU' className="text-blue-500 hover:underline hover:text-blue-700" target="_blank">Click To Watch</Link>
                    </div>
                </div>
                <div className='card border border-rounded-xl  border-[#1E2A47] shadow-xl overflow-hidden p-4 mb-2 gap-3'>
                    <div className='mb-2  space-y-4 h-64'>
                        <img className='w-full h-full border' src="https://i.ibb.co.com/NZjdSwC/Screenshot-109.png" />
                    </div>
                    <div className=''>
                        <h4 className='font-extrabold text-xl text-center'>Paula Wagner</h4>
                    </div>
                    <div className='my-1 text-center'>
                        <h4 className="font-bold">USA,ASIA</h4>
                        <Link
                            to='https://www.youtube.com/watch?v=8BlXU5mbKH0' className="text-blue-500 hover:underline hover:text-blue-700" target="_blank">Click To Watch</Link>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Podcust;