import React from 'react';
import { Link } from 'react-router-dom';

const WishListCard = ({item}) => {
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

                <Link to={`/blog/details/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Delete
                    
                </Link>
            </div>
        </div>
    );
};

export default WishListCard;