import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const Home = () => {
    const { LogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        LogOut()
            .then()
            .then(error => {
            console.log(error);
            })
        toast.success('logged out successfully')
    }
    return (
        <div>
            <h1 className='text-5xl'>Tech trends</h1>
            <Link to="/login">Login</Link> 
            <br />
            <Link to="/register">Register</Link>
            <br />
            <Link to="/addBlog">Add Blog</Link>
            <br />
            <Link to="/blogs">All blogs</Link>
            <br />
            <Link to="/wishlist">Wishlist</Link>
            <br />
            <Link to="/featured">Featured Post</Link>
            <br />
            <button onClick={handleLogOut}>Logout</button>

        </div>
    );
};

export default Home;