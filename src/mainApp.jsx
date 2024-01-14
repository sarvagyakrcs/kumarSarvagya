import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
// import Login from './components/LoginPopup/login';

const MainApp = () => {
    return (
        <Router>
            <Routes>
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    );
};

export default MainApp;
