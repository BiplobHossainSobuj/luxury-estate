import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const UpdateProfile = () => {
    const authInfo = useContext(AuthContext);
    const { user, updateUser } = authInfo;
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photoUrl = form.get('photo');
        console.log(name, email, photoUrl);
        updateUser(name,photoUrl)
            .then(res => {
                console.log(res.user);
            })

    }

    return (
        <div className=" max-w-lg mx-auto bg-base-200">
            <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name:</span>
                    </label>
                    <input type="text" name='name' placeholder={user.displayName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" disabled name='email' placeholder={user.email} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url:</span>
                    </label>
                    <input type="text" name='photo' placeholder={user.photoURL} className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Save Change</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;