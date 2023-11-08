import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const WishListCard = ({ item, handleDelete }) => {
    const { _id, blogName, url, short_description, long_description, category } = item;


    return (
        <>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={url}
                        alt="image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        <div className="badge badge-primary">{category}</div>
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {blogName}
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        {short_description}
                    </p>
                    <a className="inline-block">
                        <button
                            onClick={()=>handleDelete(_id)}
                            className='btn btn-primary'
                        >
                            Delete From Wishlist
                            
                        </button>
                        <Link to={`/wishlist/details/${_id}`} className='btn btn-primary ml-5'>Details</Link>
                    </a>
                </div>
            </div>

            {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={url} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blogName}</h5>
                    </a>
                    <div className='flex justify-between items-center'>
                        <div className="badge badge-primary">{category}</div>
                        <button><div className='badge '>wishlist</div></button>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{short_description}</p>

                    <button onClick={() => handleDelete(_id)} className='btn btn-primary'>Delete</button>
                </div>
            </div> */}
        </>

    );
};

export default WishListCard;