import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import CartContextProvider from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <BrowserRouter>
            <CartContextProvider>
                <App />
            </CartContextProvider>
        </BrowserRouter>

);