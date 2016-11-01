import * as React from 'react'
import { Link } from 'react-router'

export default () => (
    <div className="nav">
        <Link to="/home" activeClassName="active-link"> Home </Link>
        <Link to="/about" activeClassName="active-link">About</Link>
    </div>
)
