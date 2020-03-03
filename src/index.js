import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { GlobalProvider } from './context/GlobalState';

ReactDOM.render(
    <GlobalProvider>
        <AppRouter />
    </GlobalProvider>,
    document.getElementById('root')
);
