import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile   } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
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
    const updateUser =(name,photoURL)=>{
        return updateProfile(user,{
            displayName: name, photoURL: photoURL
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            console.log('observer',currentUser);
        })
        return ()=>unsubscribe();
    },[])
    const logOut = ()=>{
        return signOut(auth);
    }
    const authInfo = {user,loading,createUser,loginUser,logOut,loginWithGoogle,loginWithGithub,updateUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;