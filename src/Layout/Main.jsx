import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Toaster></Toaster>
            <Outlet></Outlet>   
        </>
    );
};

export default Main;