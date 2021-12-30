import React, { Children } from 'react';
import { Routes, Route, useNavigate, Outlet, useRoutes } from 'react-router-dom';

import './index.less';

import Layout from '../components/layout/Index'
import Home from './home/Index';
import About from './about/Index';
import Detail from './detail/Index';
import List from './list/Index';


function Info() {
    return (
        <div>
            about-info123
        </div>
    )
}

function Login() {

    const navigate = useNavigate();

    function handleClk() {
        navigate('/home')
    }

    return (
        <div onClick={() => { handleClk() }}>
            login
        </div>
    )
}

function A(props) {

    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [{
                index: true,
                element: <Home />,
            }, {
                path: '/home',
                element: <Home />,
            }, {
                path: '/about',
                element: <About />,
            }, {
                path: '/about/info',
                element: <Info />,
            }, {
                path: '/detail',
                element: <Detail />,
            }, {
                path: '/list',
                element: <List />,
            }],
        }, {
            path: '/login',
            element: <Login />,
        }
    ])
}

export default A;