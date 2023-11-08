import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';
import { Helmet } from 'react-helmet-async';

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
            <Helmet>
                <title>Tech Trends | All blogs</title>
            </Helmet>
            <div className="hero  " >
                
                <div className="hero-content text-center flex-col">
                    <img src="https://i.ibb.co/ggW4fhH/Animation-1699424004826.gif" className='' alt="" />

                    <div className="space-y-5">

                        <p className='font-bold text-6xl'>Search Your Desire Blog</p>
                        <input type="text"
                            className='input shadow-lg input-bordered w-full max-w-xs'
                            placeholder='Search your blog post'
                            value={searchTitle}
                            onChange={handleSearch}
                        />
                        <button onClick={handleSearchButton} className="btn btn-primary ml-3">Search</button>
                    </div> 
                    <div>
                    </div>
                </div>
                
            </div>
            {/* category  */}
            <div className='container pb-10 mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>

                <div onClick={() => handleCategory("Cybersecurity")} className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/fdz27cQ/cyberlogo.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cyber Security</h2>

                        <div className="card-actions">

                        </div>
                    </div>
                </div>

                <div onClick={() => handleCategory("Technology Trends")} className="card bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/wB11hsF/techlogo.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Technology Trends</h2>

                        <div className="card-actions">

                        </div>
                    </div>
                </div>

                <div onClick={() => handleCategory("Web Development")} className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/dJ3cqLT/weblogo.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Web Development</h2>

                        <div className="card-actions">

                        </div>
                    </div>
                </div>

                <div onClick={() => handleCategory("Data Science")} className="card bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/qFN58wQ/datalogo.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Data Science</h2>

                        <div className="card-actions">

                        </div>
                    </div>
                </div>

            </div>
            
            
            <div className='container mx-auto'>
                <p className=' font-bold text-3xl mb-10'>Explore our blogs</p>

                <div className='grid grid-cols-1 md:grid-cols-2 mx-5 lg:grid-cols-3 gap-6 '>

                    {
                        categoryPost.length ?
                            categoryPost?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                            : blogs?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
            
        </>
        
    );
};

export default AllBlogs;