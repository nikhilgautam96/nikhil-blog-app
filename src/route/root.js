import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import Nikhil from '../components/nikhil';
import Bootstrap from '../components/Bootstrap';
import NotFound from '../components/NotFound';
export default function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Bootstrap />} />
                <Route path="/home" element={<Home />} />
                <Route path="/nikhil" element={<Nikhil />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
