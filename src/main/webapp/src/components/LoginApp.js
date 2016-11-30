/**
 * Created by Kubal on 11/26/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class LoginApp extends React.Component {

    // constructor() {
    //     super();
    //     this.state = { val: 0 };
    //     this.update = this.update.bind(this);
    // }
    //
    // update() {
    //     this.setState({val: this.state.val + 1 })
    // }
    // componentWillMount(){
    //     this.setState({m: 2})
    // }

    render() {
        console.log('rendering!');
        return (
            <div className="login">
            <input type="text"  placeholder="username" name="username" id="username" />
            <input type="password" name="password" placeholder="password" id="password" />
                <input type="button" value="Login" />
            </div>
        );
    }
        // componentDidMount(){
        //     console.log('mounted')
        // }
        // componentWillUnmount(){
        //     console.log('bye!')
        // }

}

export default LoginApp;