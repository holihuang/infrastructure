import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
// import 'lib-flexible/flexible'

import App from './pages/A'

import store from './store'

ReactDom.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ,
    document.getElementById('app')
)