import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Body from './Body/Body';

export default function index() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Body />
            </main>
            <Footer />
        </div>
    );
}
