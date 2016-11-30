import React from 'react';

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            password: '',
            username:'',
            clientType: ''
        };
    }

    render() {
        return (
            <form className="form" onSubmit={this._handleSubmit.bind(this)}>
              <label>Login</label>
              <div className="form-fields">
                <input type="text" placeholder="username:" ref={c => this.username = c} onChange={this._getCharacterCount.bind(this)} />
                <p>{this.state.username.length} letters</p>
              </div>
              <div>
                <input type="password" placeholder="password:" ref={c => this.password = c} onChange={this._getCharacterCount.bind(this)}/>
                <p>{this.state.password.length} letters</p>
              </div>
                <div>
                    <select type="text" placeholder="clientType:" ref={c => this.clientType = c} onChange={this._getCharacterCount.bind(this)}>
                        <option>Admin</option>
                        <option>Company</option>
                        <option>Customer</option>
                    </select>
                    <p>{this.state.clientType.length} letters</p>
                </div>
              <div className="comment-form-actions">
                <button type="submit">
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

        this.props.loginUser(this.username.value, this.password.value, this.clientType.value);

        this.username.value = '';
        this.password.value = '';
        this.clientType.value = '';
        this.setState({ password: '', username: '', clientType: '' });
    }
}

export default LoginForm;
