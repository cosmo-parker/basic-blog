import * as React from 'react'
import { Link } from 'react-router'


export default () => (
    <nav className="navbar navbar-dark bg-inverse">
        <ul className="nav navbar-nav">
            <li className="nav-item" >
                <Link className="nav-link" activeClassName="active" to="/">Home</Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link" activeClassName="active" to="/about">About</Link>
            </li>
        </ul>
    </nav>
)


