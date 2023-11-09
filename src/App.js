import {React, useState} from 'react';
// components
import NavBar from './components/navBar/navbar';
import Footer from './components/footer/footer';
import BlogPostElement from './components/blogPostElement/blogPostElement';
import Jumbotron from './components/jumbotron/jumbotron';
// data
import {socialMediaLinks, contactDetails, jumbotronAnimatedText, post_data} from './data'
// css
import './input.css';
// packages
import { animate } from 'framer-motion';
import PersonalBlog from './components/personalBlog/personalBlog';

function App() {

    const [mode, setMode] = useState('darkMode');

    return (
        <>
            {/* navbar */}
            <NavBar mode={mode} setMode={setMode}/>

            {/* jumbotron */}
            <Jumbotron
                mode={mode} 
                setMode={setMode}
                contactDetails={contactDetails}
                animatedText = {jumbotronAnimatedText}
            />

            {/* personal-blog */}
            <PersonalBlog
                posts={post_data}
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
        </>
    );
}

export default App;
