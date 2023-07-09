import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import Nikhil from '../components/nikhil';

export default function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/nikhil" element={<Nikhil />} />
            </Routes>
        </BrowserRouter>
    );
}
