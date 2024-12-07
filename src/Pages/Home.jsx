import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Header from '../Components/Header';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Header></Header>
             <Outlet></Outlet>
             
        </div>
    );
};

export default Home;