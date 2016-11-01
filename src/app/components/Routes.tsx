import * as React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'
import Home from './Home'
import About from './About'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={Home} />
            <Route path="/about" component={About} />
        </Route>
    </Router>
)
