import React from 'react';
import LoginForm from './src/components/LoginForm';

class App extends React.Component{

    constructor() {
        super();
        this.state = {
            didLoggedIn: false
        }
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

    handleLogin() {
        return;
    }
    render() {
        return (
            <div>
                {/*{this.renderLoginHome.bind(this)}*/}
                <LoginForm loginUser={this.handleLogin} />
            </div>
        );
    }

}


export default App;
