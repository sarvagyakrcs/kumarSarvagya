import React, { useState, useEffect } from 'react';
import NavBar from './components/navBar/navbar';
import Footer from './components/footer/footer';
import Jumbotron from './components/jumbotron/jumbotron';
import PersonalBlog from './components/personalBlog/personalBlog';
import { socialMediaLinks, contactDetails, jumbotronAnimatedText, resume_link } from './data';
import './input.css';
import { useNavigate } from 'react-router-dom';
import LoginPopup from './components/LoginPopup/login';

function App() {
    const [mode, setMode] = useState('darkMode');
    const [posts, setPosts] = useState([]);
    const [loginPopup, setLoginPopup] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('isLoggedin') || false);

    const API_URL = 'https://sarvagyakumarcd22.pythonanywhere.com/posts';
    const ACCESS_TOKEN = '987677ba11d78e59ebc24dfe48b256016d4ceb9c';
    // testing

    const fetchPosts = async () => {
        try {
            const response = await fetch(API_URL, {
                headers: {
                    Authorization: `Token ${ACCESS_TOKEN}`
                }
            });

            if (response.ok) {
                const data = await response.json();

                if (Array.isArray(data)) {
                    const slicedPosts = data.slice(0, 10);
                    setPosts(slicedPosts);
                } else {
                    console.error('Response data is not an array:', data);
                }
            } else {
                console.error('Failed to fetch data:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();

        const redirectTimeout = setTimeout(() => {
            if (!isLoggedin) {
                setLoginPopup(true);
            }
            else{
                setLoginPopup(false);
            }
        }, 3000);

        // Clear the timeout to prevent redirection if the component unmounts
        return () => clearTimeout(redirectTimeout);
    }, [loginPopup, isLoggedin]);

    const mainApp = (
        <div className="home">
            {/* navbar */}
            <NavBar mode={mode} setIsLoggedin={setIsLoggedin} isLoggedin={isLoggedin}/>
            {/* jumbotron */}
            <Jumbotron
                mode={mode}
                setMode={setMode}
                contactDetails={contactDetails}
                animatedText={jumbotronAnimatedText}
                resume_link={resume_link}
            />

            {loginPopup ? <LoginPopup setIsLoggedin={setIsLoggedin} setLoginPopup={setLoginPopup} /> : null}

            {/* personal-blog */}
            <PersonalBlog
                posts={posts}
                contactDetails={contactDetails}
                mode={mode}
                setMode={setMode}
            />

            {/* footer */}
            <Footer
                links={socialMediaLinks}
                contactDetails={contactDetails}
                mode={mode}
                setMode={setMode}
            />
        </div>
    );

    return mainApp; // Removed unnecessary parentheses
}

export default App;
