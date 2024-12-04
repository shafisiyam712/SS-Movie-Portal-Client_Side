import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
             
             <Outlet></Outlet>
             
        </div>
    );
};

export default Home;