import * as React from 'react'
import { browserHistory} from 'react-router'

const gotoSignin = () => {
    browserHistory.push('/signin')
}

export default () => (

    <div className="row jumbotron">
            <br />
            <p className="lead">Hello</p>
            <p>First up...</p>
            <button
                className="btn btn-primary btn-lg"
                onClick={gotoSignin}>
                Sign in
            </button>
    </div>
)
