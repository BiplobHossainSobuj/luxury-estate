import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    const createUser =(email,password,name,photoURL)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const authInfo = {user,createUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;