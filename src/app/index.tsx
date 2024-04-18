import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/reset.css';
import App from './app';
import RootLayout from './layout';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RootLayout>
            <App />
        </RootLayout>
    </React.StrictMode>,
);
