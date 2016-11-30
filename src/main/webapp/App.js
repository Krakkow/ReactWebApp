import React from 'react';
import LoginForm from './src/components/LoginForm';
import render from 'react-dom';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import Header from './src/components/common/Header';
// import auth from './src/components/common/auth';

class App extends React.Component{

    constructor() {
        super();
        this.state = {
            didLoggedIn: false
        }
    }

    updateAuth(loggedIn) {
        this.setState({
            loggedIn
        })
    }


    componentWillMount() {
        auth.onChange = this.updateAuth;
        auth.login()
    }
    renderLoginHome() {
        if(!this.state.didLoggedIn) {
            return (
                <LoginForm loginUser={this.handleLogin} />
            )
        }
        return (
            <div>
                you have logged in/1
            </div>
        )
    }

    handleLogin(username, password, clientType) {
        auth.login(username, password, clientType);
        auth.onChange = this.updateAuth;
    }
    render() {
        return (
            <div>
                {this.renderLoginHome.bind(this)}
                {/*<LoginForm loginUser={this.handleLogin.bind(this)} />*/}
            </div>
        );
    }

}


export default App;
