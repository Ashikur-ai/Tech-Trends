import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import BlogCard from '../AllBlogs/BlogCard';
import InterviewCard from './InterviewCard';

const Home = () => {
    
    const blogs = useLoaderData();
    const handleNewsLetter = () => {
        toast.success("Thank you for subscribing to our newsletter")
    }
    return (
        <div className=' min-h-screen'>
            <Helmet>
                <title>Tech Trends | Home</title>
            </Helmet>

            {/* banner  */}
            <div className='flex flex-col p-2 md:flex-row justify-around items-center min-h-screen '>
                <div className='space-y-5'>
                    <p className='font-bold text-6xl'>Unlocking the <br /> <span className='text-blue-700'>Power of Technology</span> <br /> Your Guide to the <br /><span className='text-green-700'>Digital Frontier</span></p>
                    <p className='border-l-2 border-black p-3'>On this website we share tips and tricks, frameworks, projects, tutorials, etc <br />
                        Make sure you subscribe to get the latest updates</p>
                    <input type="text" placeholder="Enter your email here" className="input shadow-lg input-bordered w-full max-w-xs" />
                    <button onClick={handleNewsLetter} className='btn btn-primary ml-2'>Subscribe</button>
                </div>
                <motion.div animate={{ scale: 1 }}
                    initial={{ scale: 0 }}>
                    <img src="https://i.ibb.co/TtLJw40/learn-coding-1.png" className='h-max' alt="" />
                </motion.div>
            </div>

            {/* Browse category  */}
            <div className='bg-white pt-11'>
                <div className=' flex items-center gap-1 text-2xl font-bold p-2 container mx-auto'>
                    <p>Our Community </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="5" viewBox="0 0 35 5" fill="none">
                        <line y1="3.5" x2="35" y2="3.5" stroke="#2B2C34" stroke-width="2" />
                    </svg>
                </div>
                <div className='container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>

                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/bWdQH70/techtribe.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">TechTribe</h2>
                           
                            <div className="card-actions">
                                
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-2xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/DbLQsqd/digital-explorer.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Digital Explorer</h2>

                            <div className="card-actions">

                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/gw4jGn5/datawizard.png" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Data Wizard</h2>

                            <div className="card-actions">

                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-2xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/9GNKCCJ/geek.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Geek Hub</h2>

                            <div className="card-actions">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Recent Posts  */}
            <div className='bg-white pt-11'>
                <div className=' flex items-center gap-1 text-2xl font-bold p-2 container mx-auto'>
                    <p>Recent Blogs </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="5" viewBox="0 0 35 5" fill="none">
                        <line y1="3.5" x2="35" y2="3.5" stroke="#2B2C34" stroke-width="2" />
                    </svg>
                </div>
                <div className='container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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
                        <button onClick={handleNewsLetter} className='btn btn-primary ml-2'>Subscribe</button>
                    </div>
                </div>
            </div>
           
            
            {/* Recent Posts  */}
            <div className='bg-white pt-11'>
                <div className=' flex items-center gap-1 text-2xl font-bold p-2 container mx-auto'>
                    <p>Recent Interviews </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="5" viewBox="0 0 35 5" fill="none">
                        <line y1="3.5" x2="35" y2="3.5" stroke="#2B2C34" stroke-width="2" />
                    </svg>
                </div>
                <div className='container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pb-5'>

                    <InterviewCard
                        img={"https://i.ibb.co/7Xs6RkH/inter1.jpg"}
                        name={"Elon Musk"}
                        position={"CEO and chief technology officer of SpaceX"}
                    ></InterviewCard>
                    <InterviewCard
                        img={"https://i.ibb.co/fNf70BX/inter3.jpg"}
                        name={"Jack Ma"}
                        position={"Chinese business magnate and investor"}
                    ></InterviewCard>

                    <InterviewCard
                        img={"https://i.ibb.co/FmH1P6y/inter4.jpg"}
                        name={"Jeff Bezos"}
                        position={"CEO of Amazon"}
                    >
                    </InterviewCard>

                </div>
            </div>
            

            

        </div>


        
    );
};

export default Home;