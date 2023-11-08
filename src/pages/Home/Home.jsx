import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import BlogCard from '../AllBlogs/BlogCard';

const Home = () => {
    
    const blogs = useLoaderData();
    return (
        <div className=' min-h-screen'>
            <Helmet>
                <title>Tech Trends | Home</title>
            </Helmet>

            {/* banner  */}
            <div className='flex flex-col p-2 md:flex-row justify-around items-center min-h-screen '>
                <div className='space-y-5'>
                    <p className='font-bold text-6xl'>Hi, Welcome  <br />To Tech Trends</p>
                    <p className='border-l-2 border-black p-3'>On this website we share tips and tricks, frameworks, projects, tutorials, etc <br />
                        Make sure you subscribe to get the latest updates</p>
                    <input type="text" placeholder="Enter your email here" className="input shadow-lg input-bordered w-full max-w-xs" />
                    <button className='btn btn-primary ml-2'>Subscribe</button>
                </div>
                <motion.div animate={{ scale: 1 }}
                    initial={{ scale: 0 }}>
                    <img src="https://i.ibb.co/TtLJw40/learn-coding-1.png" className='h-max' alt="" />
                </motion.div>
            </div>

            {/* Recent Posts  */}
            <div className='bg-white pt-11'>
                <div className=' flex items-center gap-1 text-2xl font-bold p-2 container mx-auto'>
                    <p>Recent Blogs </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="5" viewBox="0 0 35 5" fill="none">
                        <line y1="3.5" x2="35" y2="3.5" stroke="#2B2C34" stroke-width="2" />
                    </svg>
                </div>
                <div className='container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    {
                        blogs.slice(-6)?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>

            {/* Newsletter  */}
            <div className=' pt-11 bg-white pb-7'>
                <div className='flex items-center justify-center  gap-1 text-2xl font-bold p-2 container mx-auto'>
                    <img src="https://i.ibb.co/jZYvYhy/newsletter.png" className=' ' alt="" />
                </div>

                <div className='space-y-4'>
                    <p className='text-center font-bold text-4xl'>Subscribe For the latest updates</p>
                    <p className='text-center text-gray-300'>Subscribe to newsletter and never miss the new post every week.</p>
                    <div className='flex justify-center'>
                        <input type="text" placeholder="Enter your email here" className="input shadow-lg input-bordered w-full max-w-xs" />
                        <button className='btn btn-primary ml-2'>Subscribe</button>
                    </div>
                </div>
            </div>
           
            

            

        </div>


        
    );
};

export default Home;