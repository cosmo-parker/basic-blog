import * as React from 'react'

interface Props {

}

interface State {
    username?: string
    password?: string
}

class SigninForm extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    onChange = (e: any) => {

        switch (e.target.name) {
            case 'username': return this.setState({ username: e.target.value })
            case 'password': return this.setState({ password: e.target.value })
            default: return;
        }
    }

    onSubmit = (e:React.SyntheticEvent<any>) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <br />
                <br />
                <div className="form-group">
                    <label htmlFor="" className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="control-label">Username</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        className="form-control" />
                </div>
                <div className="form-group">
                <button className="btn btn-primary btn-lg">Sign in</button>
                </div>
            </form >
        )
    }
}

export default SigninForm
