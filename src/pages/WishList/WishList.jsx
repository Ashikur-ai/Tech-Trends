import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import WishListCard from './WishListCard';
import toast from 'react-hot-toast';


const WishList = () => {
    const { user } = useContext(AuthContext);
    const [wishlist, setWishlist] = useState([]);

    const url = `http://localhost:5000/wishlist?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
        .then(data => setWishlist(data))
    }, [url])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/wishlist/${id}`, {
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
        <div className='grid grid-cols-3 container mx-auto'>
            
           {wishlist?.map(item => <WishListCard key={item._id} item={item} handleDelete={handleDelete}></WishListCard>)}
        </div>
    );
};

export default WishList;