import React, { useReducer } from 'react';
import { Link, Outlet } from 'react-router-dom';
import MyNavLink from '../myNavLink/Index';

import style from './index.less';

function Layout(props) {

    const initState = {
        showSec: false,
    };

    function reducer(state, action) {
        const {type} = action || {};
        const { showSec } = state
        switch(type) {
            case 'second':
                return {
                    ...state,
                    showSec: !showSec,
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initState)

    function handleAbout() {
        dispatch({
            type: 'second',
        })
    }

    return (
        <div className={style.wrapper}>
            <div className={style.header}>header</div>
            <div className={style.body}>
                <div className={style.sider}>
                    <MyNavLink to="/home">home</MyNavLink>
                    <MyNavLink to="/about" onClick={() => { handleAbout() }}>about</MyNavLink>
                    {
                        state.showSec ? <MyNavLink to="/about/info">about info</MyNavLink> : null
                    }
                    <MyNavLink to="/detail">detail</MyNavLink>
                    <MyNavLink to="/list">list</MyNavLink>
                </div>
                <div className={style.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout;