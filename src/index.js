import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Root from './route/root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);
