import * as React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'
import Home from './Home'
import SigninPage from './Signin/SigninPage'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Home} />
            <Route path="/signin" component={SigninPage} />
        </Route>
    </Router>
)
