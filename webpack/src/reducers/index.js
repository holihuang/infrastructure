// 合并reducer文件
import { combineReducers } from 'redux';

const context = require.context('.', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');
const reducers = keys.reduce((res, item) => {
    return res = {
        ...res,
        [item.match(/[^\/\.]+/)[0]]: context(item).default,
    }
}, {});

export default combineReducers(reducers);