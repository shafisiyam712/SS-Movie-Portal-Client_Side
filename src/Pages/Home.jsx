import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Header from '../Components/Header';
import Upcoming from '../Components/Upcoming';
import Podcast from '../Components/Podcast';
import Newsletter from '../Components/Newsletter';
import MemberShip from '../Components/MemberShip';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Header></Header>
             <Outlet></Outlet>
             <Upcoming></Upcoming>
             <Podcast></Podcast>
             <MemberShip></MemberShip>
             <Newsletter></Newsletter>
             
        </div>
    );
};

export default Home;