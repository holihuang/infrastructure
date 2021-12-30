import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import style from './index.less';

function Home(props) {

    let navigate = useNavigate();
    const { dispatch, home } = props || {}
    const { count } = home || {}

    useEffect(() => {
        
    }, [])

    function handleClk() {
        dispatch({
            type: 'add',
            payload: {
                data: 1,
            }
        })
    }

    function handleTo() {
        navigate('/about', { replace: true });
    }

    return (
        <div>
            home
            <h1>当前的数值 { count }</h1>
            <div onClick={() => { handleTo() }}>跳到about</div>
            <button onClick={() => { handleClk() }}>+</button>
        </div>
    )
}

function mapStateToProps({home}) {
    return {home}
}

export default connect(mapStateToProps)(Home);