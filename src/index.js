import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import AuthPage from "./Pages/AuthPage";
import {Provider} from "react-redux";
import {rootReducer} from "./reducers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/about",
        element: <div>Hello about</div>,
    },
    {
        path:"/auth",
        element : <AuthPage/>,
        errorElement: <ErrorPage/>
    }
]);

const store = configureStore({reducer: rootReducer});

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);