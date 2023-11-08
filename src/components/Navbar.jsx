import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        LogOut()
            .then()
            .then(error => {
                console.log(error);
            })
        toast.success('logged out successfully')
    }
    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addBlog">Add Blog</Link></li>
        <li><Link to="/blogs">All blogs</Link></li>
        <li><Link to="/featured">Featured Post</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
    </>
    return (
        <div className="navbar bg-white shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-2xl text-[#001858] lg:text-4xl font-bold">TechTrends</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold ">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end text-black">
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle bg-blue-800 avatar">
                                        <div className="w-10 rounded-full">
                                            {
                                                user.photoURL ?
                                                    <img src={`${user.photoURL}`} alt="" />
                                                    :
                                                    <div className='font-bold text-2xl text-white'>{user.email.slice(0, 1)}</div>
                                            }
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                {user.displayName ? user.displayName : user.email}

                                            </a>
                                        </li>
                                        <li onClick={handleLogOut}><a>Logout</a></li>
                                    </ul>
                                </div>
                            </>


                            :

                            <>
                                <Link to="/login" className='btn btn-primary mr-3'>
                                    Login
                                </Link>
                                <Link to="/register" className='btn btn-primary'>
                                    Register
                                </Link>
                            </>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;