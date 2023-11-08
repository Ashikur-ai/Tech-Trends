import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";

const Home = () => {
    
    
    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Tech Trends | Home</title>
            </Helmet>
            
            
            {/* <motion.div animate={{ x: 100, scale: 1 }}
            initial={{scale:0}}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </motion.div> */}

            

            

        </div>


        
    );
};

export default Home;