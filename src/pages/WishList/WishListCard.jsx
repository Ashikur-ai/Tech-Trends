import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const WishListCard = ({item, handleDelete}) => {
    const { _id, blogName, url, short_description, long_description, category } = item;

    
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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

                <button onClick={()=>handleDelete(_id)} className='btn btn-primary'>Delete</button>
            </div>
        </div>
    );
};

export default WishListCard;