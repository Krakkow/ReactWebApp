import React from 'react';
import LoginForm from './src/components/LoginForm';
import render from 'react-dom';
import { browserHistory, Router, Route, Link, withRouter } from 'react-router';
import Header from './src/components/common/Header';
// import auth from './src/components/common/auth';

class App extends React.Component{

    constructor() {
        super();
        console.log("hello")
        this.state = {
            didLoggedIn: false
        }
    }

    updateAuth(loggedIn) {
        this.setState({
            loggedIn
        })
    }
    handleLogin() {
        return;
    }

    componentWillMount() {
    }

    renderloginHome() {
        if(this.state.didLoggedIn) {
            return (
                <LoginForm loginUser={this.handleLogin} />
            )
        }
            return (
                <h1>
                    you have logged in/1
                </h1>
            )

    }

    render() {
        return (
            <div>
                {/*{this.renderloginHome}*/}
                <LoginForm loginUser={this.handleLogin.bind(this)} />
            </div>
        );
    }

}


export default App;
