import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const AllBlogs = () => {
    const blogs = useLoaderData();
    return (
        <div className='grid grid-cols-3 container mx-auto'>
            {
                blogs?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default AllBlogs;