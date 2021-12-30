import React, { useEffect, useReducer } from 'react'
import { connect } from 'react-redux';

import Minus from '../../components/minus/Index';

import http from '../../utils/http'
import style from './index.less';

function About(props) {
console.log(props, 'about...')

    const initState = {
        data: '',
    }

    function reducers(state, action) {
        const { type, payload } = action
        const {data} = payload || {}
        switch(type) {
            case 'data':
                return {
                    ...state,
                    data,
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducers, initState)

    useEffect(() => {
        // http({
        //     method: 'get',
        //     url: '/',
        // }).then(res => {
        //     const {data} = res || {}
        //     dispatch({
        //         type: 'data',
        //         payload: {
        //             data,
        //         }
        //     })
        // })
    }, [])

    function getProps() {
        return Object.keys(props).reduce((res, item) => {
            const key = item === 'about' ? 'minus' : item
            return res = {
                ...res,
                [key]: item === 'about' ? props[item].minus : props[item]
            }
        }, {})
    }

    return (
        <div>
            <h1>about</h1>
            <div>{state.data}</div>
            <Minus {...getProps()} />
        </div>
    )
}

function mapStateToProps({about}) {
    return {about};
}

export default connect(mapStateToProps)(About);