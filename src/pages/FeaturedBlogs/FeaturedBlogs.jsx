import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from './Table';
import { Helmet } from 'react-helmet-async';

const FeaturedBlogs = () => {
    const posts = useLoaderData();
    const sortedPosts = posts.slice(0);
    sortedPosts.sort((a, b) => b.long_description.length - a.long_description.length);

    console.log(sortedPosts);
    return (
        <div>
            <Helmet>
                <title>Tech Trends | Featured Post</title>
            </Helmet>
            Featured blogs 10
            <br />
            {sortedPosts.slice(0, 10)?.map(post =><Table key={post._id} post={post}></Table>)}
        </div>
    );
};

export default FeaturedBlogs;