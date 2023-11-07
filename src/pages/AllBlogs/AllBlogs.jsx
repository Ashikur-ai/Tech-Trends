import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const AllBlogs = () => {
    const blogs = useLoaderData();
    const [categoryPost, setCategoryPost] = useState([]);
    const handleCategory = (category) => {
        console.log(category);
        console.log(blogs);
        const filteredPosts = blogs.filter(blog => blog.category === category)
        setCategoryPost(filteredPosts);
    }
     
    return (
        <>
            
            <div className='grid grid-cols-4'>
                <button onClick={() => handleCategory("Cybersecurity")}>CyberSecurity</button>
                <button onClick={() => handleCategory("Technology Trends")}>Technology Trends</button>
                <button onClick={() => handleCategory("Web Development")}>Web Development</button>
                <button onClick={() => handleCategory("Data Science")}>Data Science</button>
            </div>


            <div className='grid grid-cols-3 container mx-auto'>
                

                {
                    categoryPost.length ?
                        categoryPost?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                        :
                        blogs?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
                
                        
                        
                    
            </div>
        </>
        
    );
};

export default AllBlogs;