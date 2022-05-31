import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wall from "../../pages/Wall";
import Identification from "../../pages/Identification";
import Navbar from '../NavBar';

const index = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Identification />} />
                <Route path='/wall' exact element={<Wall />} />
            </Routes>
        </Router>
    );
};

export default index;