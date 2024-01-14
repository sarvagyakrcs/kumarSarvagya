import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

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
            const user = result.user;
            props.setIsLoggedin(true);
            localStorage.setItem('userDetails', JSON.stringify(user));
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
                        Login Sucessfull
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
