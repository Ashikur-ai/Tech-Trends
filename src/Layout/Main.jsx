import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div className='bg-[#EFF0F3]'>
            <Navbar></Navbar>
            <Toaster></Toaster>
            <Outlet></Outlet>   
            <Footer></Footer>
        </div>
    );
};

export default Main;