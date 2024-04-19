import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/reset.css';
import App from './app';
import AppBoundaries from './boundaries';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppBoundaries>
            <App />
        </AppBoundaries>
    </React.StrictMode>,
);
