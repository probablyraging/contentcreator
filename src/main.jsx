import React from 'react';

import ReactDOM from 'react-dom/client';
window.React = React;

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);