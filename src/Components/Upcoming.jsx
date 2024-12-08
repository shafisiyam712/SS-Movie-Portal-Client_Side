import React from 'react';

const Upcoming = () => {
    return (
        <div className='mt-20'>
 <h1 className="font-extrabold text-white text-3xl mb-3 text-center">Upcoming Movies</h1>
 <h2 className='text-center mb-5'>This movies will be available in our website in the next month</h2>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card border p-4 rounded-lg shadow-lg">
                    <img
                        src="https://i.ibb.co.com/mtBmDjh/image-2-810x1200.png"

                        className="w-full h-60 object-cover rounded-lg mb-4"
                    />
                    <div className='space-y-2 ml-3 mt-2'>
                        <h2 className="font-bold text-xl mb-2">Title: The Substance</h2>
                        <p className="text-white">Genre: Drama,horror,thriller</p>
                        <p className="text-white">Duration: 150 min</p>
                        <p className="text-white">Approximate Release: jan 29,2025</p>
                        <p className="text-white">Produced by:WB Company</p>
                    </div>

                </div>
                <div className="card border p-4 rounded-lg shadow-lg">
                    <img
                        src="https://i.ibb.co.com/mvqRDDV/MV5-BMzgz-MDYw-OTIt-ZGRk-My00-OWJl-LWE3-Mm-It-Mm-Ni-Mj-Y3-YTU0-M2-Y1-Xk-Ey-Xk-Fqc-Gc-V1.jpg"

                        className="w-full h-60 object-cover rounded-lg mb-4"
                    />
                    <div className='space-y-2 ml-3 mt-2'>
                        <h2 className="font-bold text-xl mb-2">Title: The Boy And THe Heron</h2>
                        <p className="text-white">Genre: Drama,Fantasy</p>
                        <p className="text-white">Duration: 110 min</p>
                        <p className="text-white">Approximate Release: jan 3,2025</p>
                        <p className="text-white">Produced by:Studio Gulbi</p>
                    </div>

                </div>
                <div className="card border p-4 rounded-lg shadow-lg">
                    <img
                        src="https://i.ibb.co.com/p3KL50R/image-154-1024x512.webp"

                        className="w-full h-60 object-cover rounded-lg mb-4"
                    />
                    <div className='space-y-2 nl-3 mt-2'>
                        <h2 className="font-bold text-xl mb-2">Title: The Platform 2</h2>
                        <p className="text-white">Genre: Drama,Action,Thriller</p>
                        <p className="text-white">Duration: 150 min</p>
                        <p className="text-white">Approximate Release: jan 20,2025</p>
                        <p className="text-white">Produced by:Netflix Spain</p>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default Upcoming;