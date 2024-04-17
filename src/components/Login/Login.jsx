import React, { useContext } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';

const Login = () => {
    const authInfo = useContext(AuthContext);
    const { user, loginUser, loginWithGoogle, loginWithGithub } = authInfo;
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        loginUser(email, password)
            .then(res => {
                console.log(res.user);

            })
            .catch(err => {
                console.log(err);
                toast("something is wrong");
            })
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                console.log(res.user);

            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleGithubLogin = () => {
        loginWithGithub()
            .then(result => {
                console.log(result.user);
                
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <Helmet>
                <title>User Login</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className=" max-w-lg mx-auto bg-base-200">
                <form onSubmit={handleLogin} className="card-body">

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
                    </div>
                    <div>
                        <label className="label">
                            <p>New to the website ? Please <Link to="/register" className="text-blue-500 link link-hover">Register</Link> </p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <div className="divider divider-primary">
                            Or Log in with
                            <span className='hover:cursor-pointer' onClick={handleGoogleLogin}><FaGoogle /></span>
                            <span className='hover:cursor-pointer' onClick={handleGithubLogin}><FaGithub /></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;