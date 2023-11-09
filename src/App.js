import React, { useState, useEffect } from 'react';
import NavBar from './components/navBar/navbar';
import Footer from './components/footer/footer';
import Jumbotron from './components/jumbotron/jumbotron';
import { socialMediaLinks, contactDetails, jumbotronAnimatedText, resume_link } from './data';
import './input.css';
import PersonalBlog from './components/personalBlog/personalBlog';

function App() {
    const [mode, setMode] = useState('darkMode');
    const [posts, setPosts] = useState([]); // State to store the fetched posts

    const apiUrl = 'https://sarvagyakumarcd22.pythonanywhere.com/posts';
    const accessToken = '987677ba11d78e59ebc24dfe48b256016d4ceb9c';

    // Function to fetch the posts
    const fetchPosts = async () => {
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Token ${accessToken}`
                }
            });

            if (response.ok) {
                const data = await response.json();

                if (Array.isArray(data)) {
                    const slicedPosts = data.slice(0, 10); // Retrieve the first 10 posts
                    setPosts(slicedPosts); // Update the state with fetched posts
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
        fetchPosts(); // Fetch posts when the component mounts
    }, []); // Empty dependency array means it will run once when the component mounts

    return (
        <>
            <div className="home">
                {/* navbar */}
                <NavBar mode={mode} setMode={setMode} />

                {/* jumbotron */}
                <Jumbotron
                    mode={mode}
                    setMode={setMode}
                    contactDetails={contactDetails}
                    animatedText={jumbotronAnimatedText}
                    resume_link = {resume_link}
                />

                {/* personal-blog */}
                <PersonalBlog
                    posts={posts} // Pass fetched posts as a prop
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
        </>
    );
}

export default App;
