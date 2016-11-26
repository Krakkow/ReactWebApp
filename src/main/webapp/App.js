/*
 React component Lifecycle Methods
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{

    constructor() {
        super();
        this.state = { val: 0 };
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({val: this.state.val + 1 })
    }
    componentWillMount(){
        console.log('mounting')
    }

    render() {
       console.log('rendering!')
        return(
             <button onClick={this.update}>{this.state.val}</button>
        );
    }
    componentDidMount(){
        console.log('mounted')
    }
    componentWillUnmount(){
        console.log('bye!')
    }
}

class Wrapper extends  React.Component{
    constructor(){
        super();


    }
    mount(){
        ReactDOM.render(<App />, document.getElementById('a'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render(){
        return(
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        )
    }
}

export default Wrapper

/*
 React component Lifecycle Methods
 */
// import React from "react";
// import ReactDOM from 'react-dom';
// class App extends React.Component{
//
//         constructor() {
//         super();
//         this.state = { val: 0 };
//         this.update = this.update.bind(this);
//     }
//
//     update() {
//         this.setState({val: this.state.val + 1 })
//     }
//
//     render(){
//         console.log('rendering!')
//         return (
//             <button onClick={this.update}>
//                 {this.state.val}
//             </button>
//         );
//
//     }
// }
//
// export default App;


/*
 Working with children
 */
// import React from "react";
// class App extends React.Component{
//     render(){
//         return <Button>I <Heart/> React</Button>
//
//     }
// }
//
// class Button extends React.Component{
//     render(){
//         return <button>{this.props.children}</button>
//     }
// }
//
// const Heart = () => <span className="glyphicon glyphicon-heart"></span>
// export default App

/*
 End
 */

// import React from 'react';
// import ReactDOM from 'react-dom';
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             red: 0,
//             green: 0,
//             blue: 0
//         }
//         this.update = this.update.bind(this)
//     }
//
//     update(e) {
//         this.setState({
//             red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
//             green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
//             blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <Slider ref="red" update={this.update}/>
//                 {this.state.red}
//                 <Slider ref="green" update={this.update}/>
//                 {this.state.green}
//                 <Slider ref="blue" update={this.update}/>
//                 {this.state.blue}
//             </div>
//         );
//     }
// }
//
// class Slider extends React.Component {
//     render() {
//         return (
//             <div>
//                 <input ref="inp" type="range"
//                        min="0"
//                        max="255"
//                        onChange={this.props.update}/>
//             </div>
//         );
//     }
// }
//
// export default App

/*
 End
 */

// const Widget = (props) => {
//     return (
//         <div>
//             <input type="text"
//                    onChange={props.update} />
//             <h1>{props.txt}</h1>
//         </div>
//     );
// }


//This is a way to work with props
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class App extends React.Component {
//     render() {
//         //Another way to create component
//         // return React.createElement('h1', null, 'Hello ALL')
//         let txt = this.props.txt;
//         return <h1>{txt}</h1>
//     }
// }
//
// App.defaultProps = {
//     txt: 'This is a default property value',
//     cat: React.PropTypes.number.isRequired
// }
//
// ReactDOM.render(
//     <App cat={5} />,
//     document.getElementById('app')
// );


//Another way to create component
// return React.createElement('h1', null, 'Hello ALL')