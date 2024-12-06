import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Outlet></Outlet>
             
        </div>
    );
};

export default Home;