import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { SignIn, googleSignUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        SignIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully logged in')
                const user = { email };
                axios.post('https://tech-trends-server.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')

                        }
                    })
            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    const handleGoogle = () => {
        googleSignUp()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location?.state : '/')
                toast.success('Successfully logged in')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-white">
            <Helmet>
                <title>Tech Trends | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card p-4 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <button onClick={handleGoogle} className=" btn btn-outline">Google</button>
                </div>
                <div>
                    <img src="https://i.ibb.co/kXQfs3p/login.gif" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;