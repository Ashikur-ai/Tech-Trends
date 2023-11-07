import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const AllBlogs = () => {
    const blogs = useLoaderData();
    const [categoryPost, setCategoryPost] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    

    const handleSearch = (event) => {
        setSearchTitle(event.target.value);
    }

    const handleSearchButton = () => {
        const searchedBlog = blogs.filter(blog => blog.blogName.toLowerCase().includes(searchTitle.toLowerCase())
        );
        setCategoryPost(searchedBlog)
    }

    


    const handleCategory = (category) => {
        
        const filteredPosts = blogs.filter(blog => blog.category === category)
        setCategoryPost(filteredPosts);
    }

    // let resultBlog = [];
    //  if (categoryPost.length) {
    //     resultBlog = categoryPost;
    // }
    // else if (searchedBlog.length) {
    //     resultBlog = searchedBlog;
    // }
    // else if (blogs.length) {
    //     resultBlog = blogs;
    // }
    
     
    return (
        <>
            <input type="text"
                className='border border-lime-500'
                placeholder='Search your blog post'
                value={searchTitle}
                onChange={handleSearch}
            />
            <button className='btn btn-primary' onClick={handleSearchButton}>Search</button>
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
                    : blogs?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
                

                

              
                    
                
                        
                        
                    
            </div>
        </>
        
    );
};

export default AllBlogs;