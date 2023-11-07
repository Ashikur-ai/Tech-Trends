import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const BlogCard = ({ blog }) => {
    const { _id, blogName, url, short_description, long_description, category, email } = blog;
    const { user } = useContext(AuthContext);
    const handleWishlist = (event) => {
        event.preventDefault();
        const wishItem = { blogName, url, user_email: user?.email, author_email: email, short_description, long_description, category };
        
        fetch('http://localhost:5000/addWishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
        toast.success('Added to the wishlist')
        
    }
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
                    <button onClick={handleWishlist}><div className='badge '>wishlist</div></button>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{short_description}</p>
                
                <Link to={`/blog/details/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>

    );
};

export default BlogCard;