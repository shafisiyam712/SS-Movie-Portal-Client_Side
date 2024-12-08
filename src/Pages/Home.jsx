import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Header from '../Components/Header';
import Upcoming from '../Components/Upcoming';
import Podcust from '../Components/Podcust';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Header></Header>
             <Outlet></Outlet>
             <Upcoming></Upcoming>
             <Podcust></Podcust>
             
        </div>
    );
};

export default Home;