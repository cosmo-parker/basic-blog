import * as React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from '../state/store'

import App from './App'
import Home from './Home'
import SigninPage from './Signin/SigninPage'

export default (
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Home} />
            <Route path="/signin" component={SigninPage} />
        </Route>
    </Router>
    </Provider>
)
