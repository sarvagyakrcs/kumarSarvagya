import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import LogOut from './logOut';

const LoginForm = (props) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
            localStorage.setItem('userDetails', JSON.stringify(user));
            localStorage.setItem('isLoggedIn', true);
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };

    const openChatRoom = () => {
        navigate('/chatRoom');
    }

    return (
        <>
            <div className="login-container">
                {user ? (
                    // User is logged in, display user details and log out button
                    <>
                        <LogOut />
                        {/* {props.setLoginPopup(false)} */}
                    </>
                ) : (
                    // User is not logged in, display sign in with Google button
                    <button onClick={signInWithGoogle}>Sign In</button>
                )}
            </div>
        </>
    );
};

export default LoginForm;
