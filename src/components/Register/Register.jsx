import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { FaEye,FaEyeSlash  } from "react-icons/fa";

const Register = () => {
    const authInfo = useContext(AuthContext);
    const { user, createUser } = authInfo;
    const [showPassword,setShowPassword] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photoUrl = form.get('photo');
        const password = form.get('password');
        console.log(name, email, photoUrl, password);
        createUser(email, password,name,photoUrl)
            .then(res => {
                updateProfile(res.user,{
                    displayName: name, photoURL: photoUrl
                })
                console.log(res.user);

            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <div className=" max-w-lg mx-auto bg-base-200">
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword?"text":"password"} name='password' placeholder="password" className="input input-bordered" required />
                    <span className='relative bottom-8 left-96' onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash />:<FaEye />}</span>
                </div>
                <div>
                    <label className="label">
                        <p>Already have account ? Please <Link to="/login" className="text-blue-500 link link-hover">Login</Link> </p>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Register;