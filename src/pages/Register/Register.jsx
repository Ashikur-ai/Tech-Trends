import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { SignUp, googleSignUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            return toast.error('The password is less than 6 characters')
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error("don't have a capital letter")
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]+/.test(password)) {
            return toast.error("don't have a special character")
        }
        else if (!/[0-9]/.test(password)) {
            return toast.error("Don't have any numeric character")
        }

        SignUp(email, password)
            .then(result => {
                
                navigate(location?.state ? location?.state : '/')
                toast.success('Successfully registered')
            })
            .then(error => {
            console.log(error);
        })
    }
    
    const handleGoogle = () => {
        googleSignUp()
            .then(result => {
                
                navigate(location?.state ? location?.state : '/')
                toast.success('Successfully logged in')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Tech Trends | Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <button onClick={handleGoogle} className=" btn btn-outline">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;