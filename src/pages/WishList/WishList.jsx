import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import WishListCard from './WishListCard';


const WishList = () => {
    const { user } = useContext(AuthContext);
    const [wishlist, setWishlist] = useState([]);

    const url = `http://localhost:5000/wishlist?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
        .then(data => setWishlist(data))
    }, [])
    return (
        <div className='grid grid-cols-3 container mx-auto'>
            
           {wishlist?.map(item => <WishListCard key={item._id} item={item}></WishListCard>)}
        </div>
    );
};

export default WishList;