import React from 'react'
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const LogOut = (props) => {

    const logOut = async () => {
        localStorage.removeItem('userDetails');
        localStorage.clear();
        try {
            await signOut(auth);
            props.setIsLoggedin(false);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <button onClick={logOut}>Log Out</button>
    )
}

export default LogOut