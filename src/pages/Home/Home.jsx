import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
    const { LogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        LogOut()
            .then()
            .then(error => {
            console.log(error);
        })
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
            <button onClick={handleLogOut}>Logout</button>

        </div>
    );
};

export default Home;