import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {configureStore} from '@reduxjs/toolkit';
import App from './App';
import {Provider} from "react-redux";
import {rootReducer} from "./reducers";

const store = configureStore({reducer: rootReducer});

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
            <App/>
    </Provider>
);