import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider   } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user,setUser] = useState(null);
    const createUser =(email,password,name,photoURL)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const loginWithGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub =()=>{
        return signInWithPopup(auth, githubProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log('observer',currentUser);
        })
        return ()=>unsubscribe();
    },[])
    const logOut = ()=>{
        return signOut(auth);
    }
    const authInfo = {user,createUser,loginUser,logOut,loginWithGoogle,loginWithGithub};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;