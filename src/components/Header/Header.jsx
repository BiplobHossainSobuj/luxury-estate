import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const authInfo = useContext(AuthContext);
    const { user,logOut } = authInfo;
    const [name, setName] = useState(null);
    const handleLogout=()=>{
        logOut()
        .then(()=>{
            console.log('logout');
        })
        .catch((err)=>{
            console.log('log out error',err)
        })
    }
    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        
        <li><NavLink to="/profileUpdate">Update Profile</NavLink></li>
        <li><NavLink to="/profile">User Profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Luxury Estate</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <>
                            <div className="tooltip tooltip-left" data-tip={name}>
                                <img onMouseOver={() => setName(user.displayName)} className='w-10 mr-2 rounded-full hover:cursor-pointer' alt="user" src={user?.photoURL} />
                            </div>
                            <button onClick={handleLogout} className="btn btn-outline btn-success">Log Out</button>
                        </> :
                        <Link to='/login'><button className="btn btn-outline btn-success">Login</button></Link>

                }
            </div>
        </div>
    );
};

export default Header;