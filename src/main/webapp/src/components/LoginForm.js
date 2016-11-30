import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            password: '',
            username:'',
            clientType: '',
            error: '',
            loading: false
        };
    }

    onButtonPress() {
        const { username, password, clientType } = this.state;

        this.setState({ error: '', loading: true });

        axios.post('/login', {
            username: username,
            password: password,
            clientType: clientType
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed ', loading: false
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }
    render() {
        return (
            <form className="form-control" onSubmit={this.onButtonPress.bind(this)}>
              <label>Login</label>
              <div>
                <input type="text" placeholder="username:" ref={c => this.username = c} onChange={this._getCharacterCount.bind(this)} />
                <p>{this.state.username.length} letters</p>
              </div>
              <div>
                <input type="password" placeholder="password:" ref={c => this.password = c} onChange={this._getCharacterCount.bind(this)}/>
                <p>{this.state.password.length} letters</p>
              </div>
                <div >
                    <select type="text" placeholder="clientType:" ref={c => this.clientType = c} onChange={this._getCharacterCount.bind(this)}>
                        <option>Admin</option>
                        <option>Company</option>
                        <option>Customer</option>
                    </select>
                    <p>{this.state.clientType.length} letters</p>
                </div>
              <div >
                <button className="btn btn danger" type="submit">
                  Login Now!
                </button>
              </div>
            </form>
        );
    }

    _getCharacterCount(e) {
        this.setState({
            password: this.password.value,
            username: this.username.value,
            clientType: this.clientType.value
        });
    }

    _handleSubmit(event) {
        event.preventDefault();

        if (!this.username.value || !this.password.value) {
            alert('Please enter your username and password.');
            return;
        }
        // this is the method that calls his parent method to operate a user login!
        // with username password and clientType
        this.props.loginUser(this.username.value, this.password.value, this.clientType.value);

        this.username.value = '';
        this.password.value = '';
        this.clientType.value = '';
        this.setState({ password: '', username: '', clientType: '' });
    }
}

export default LoginForm;
