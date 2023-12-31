import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import WishListCard from './WishListCard';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';


const WishList = () => {
    const { user } = useContext(AuthContext);
    const [wishlist, setWishlist] = useState([]);

    const url = `https://tech-trends-server.vercel.app/wishlist?email=${user?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setWishlist(res.data);
            })
        // fetch(url)
        //     .then(res => res.json())
        // .then(data => setWishlist(data))
    }, [url])

    const handleDelete = (id) => {
        fetch(`https://tech-trends-server.vercel.app/wishlist/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = wishlist.filter(item => item._id !== id);
                    setWishlist(remaining);
                    toast.success('Deleted successfully')
                }
            })
    }
    return (
        <>
            <p className='text-3xl font-bold text-center m-5'>Your Wishlist</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto p-2'>
                <Helmet>
                    <title>Tech Trends | Wishlist</title>
                </Helmet>

                {wishlist?.map(item => <WishListCard key={item._id} item={item} handleDelete={handleDelete}></WishListCard>)}
            </div>
        </>

    );
};

export default WishList;