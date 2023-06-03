import React from 'react';
import { hydrate } from "react-dom";
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

window.React = React;

const rootElement = document.getElementById("app");
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    createRoot(document.getElementById('app')).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}