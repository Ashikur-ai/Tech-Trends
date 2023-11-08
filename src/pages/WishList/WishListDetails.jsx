import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import CommentCard from '../BlogDetail/CommentCard';
import { AuthContext } from '../../providers/AuthProvider';

const WishListDetails = () => {
    const { user } = useContext(AuthContext);
    const blog = useLoaderData();

    const { url, blogName, short_description, email, long_description, author_email } = blog;

 
 


    return (
        <div className="">
            <Helmet>
                <title>Tech Trends | Details</title>
            </Helmet>

            <div className="hero min-h-screen" style={{ backgroundImage: `url(${url})` }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-white">
                    <div className="shadow-2xl rounded-2xl">
                        <h1 className="mb-5 text-5xl font-bold">{blogName}</h1>
                        <p className="mb-5 ">{short_description}</p>
                        <p className="">By: {author_email}</p>
                    </div>
                </div>
            </div>


            <div className="container mx-auto mt-9 p-2">
                <p className="text-5xl mb-9 font-bold text-center">{blogName}</p>
                <p className="text-xl">{long_description}</p>
            </div>
            <div className="w-3/5 mt-10  mx-auto">
                
            </div>
            <div className="w-3/5 mx-auto">
                {
                    user?.email == email ?
                        <>
                            <p>You can't comment on your own blog</p>
                            {/* <Link to={`/update/${_id}`} className='btn btn-primary'>Update blog</Link> */}
                        </>
                        :
                        <>

                            
                        </>
                }
            </div>
        </div>
    );
};

export default WishListDetails;