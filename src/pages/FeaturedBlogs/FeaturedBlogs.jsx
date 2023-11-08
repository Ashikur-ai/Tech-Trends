import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from './Table';
import { Helmet } from 'react-helmet-async';
import DataTable from 'react-data-table-component';

const FeaturedBlogs = () => {
    const posts = useLoaderData();
    const sortedPosts = posts.slice(0);
    sortedPosts.sort((a, b) => b.long_description.length - a.long_description.length);

    const columns = [
        {
            name: 'Title',
            selector: row => row.blogName,
        },
        {
            name: 'Category',
            selector: row => row.category,
        },
        {
            name: 'Blog Owner',
            selector: row=> row.email,
        }
    ];

    
    return (
        <div className='min-h-screen bg-white'>
            <Helmet>
                <title>Tech Trends | Featured Post</title>
            </Helmet>
            <p className='text-center font-bold text-3xl'>Top 10 Featured Post are here</p>
            <div className='w-3/4 mx-auto'>
                <DataTable
                    columns={columns}
                    data={sortedPosts.slice(0, 10)}
                />
            </div>
            
            
        </div>
    );
};

export default FeaturedBlogs;