import {React, PropTypes} from 'react'
import {render} from 'react-dom'
import {browserHistory, Router, Route, Link, withRouter} from 'react-router'
import Header from './src/components/common/Header'
import auth from './src/components/common/auth'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn: auth.loggedIn()
        }
    };

    updateAuth(loggedIn) {
        this.setState({
            loggedIn
        })
    }

    componentWillMount() {
        auth.onChange = this.updateAuth;
        auth.login()
    }

    render() {
        return (
            // <div className="container-fluid">
            //     <Header/>
            //     {this.props.children}
            // </div>
            <div>
                <Header/>
                <ul>
                    <li>
                        {this.state.loggedIn ? (
                            <div>
                                <Link to="/logout">Log out</Link>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>
                            </div>
                        ) : (
                            <Link to="/login">Sign in</Link>
                        )}
                    </li>

                </ul>
                {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
            </div>
        );

    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

