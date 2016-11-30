import React from 'react';
import {Link, IndexLink} from 'react-router';


class HomePage extends React.Component {
    render(){
        return(
        <nav>
            <IndexLink to="/home" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/coupons" activeClassName="active">Coupons</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>

            <div className="jumbotron">
                <h1>Administration</h1>
                <p>React, Redux and React Router in ES6 for ultra-responsive web apps</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        </nav>
        );
    }
}

export default HomePage;