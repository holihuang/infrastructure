import React, { useEffect, useReducer, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
// import 'antd/dist/antd.css'

import MyNavLink from '../components/myNavLink/Index';

import style from './index.less';

import cfg from './cfg'

function A(props) {
    const initState = {
        menuList: cfg.menuList,
    };

    function reducers(state, action) {
        const { type = '', payload } = action;
        const { index } = payload || {};
        const { menuList } = state || {};
        switch (type) {
            case 'toggleMenu':
                return {
                    ...state,
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducers, initState);

    useEffect(() => {
        console.log(props, 1122)
    }, [])

    function handleMenuItem(opt) {
        const { name, children = [], index } = opt;
        if (children.length) {
            dispatch({
                type: 'toggleMenu',
                payload: {
                    index,
                }
            })
        }
    }

    return (
        <div className={style.wrapper}>
            <div className={style.side}>
                {
                    state.menuList.map((item, index) => {
                        const { name } = item || {}
                        return (
                            <MyNavLink onClick={() => { handleMenuItem({ ...item, index }) }} key={name} to={`/${name}`}>
                                {name}
                            </MyNavLink>
                        )
                    })
                }
            </div>
            <Switch>
                {
                    state.menuList.map(item => {
                        const { name, component: Component } = item
                        return (
                            <Route key={name} path={`/${name}`} component={Component} />
                        )
                    })
                }
                <Redirect to="/home" from="/" />
            </Switch>
        </div>
    )
};

export default withRouter(A);