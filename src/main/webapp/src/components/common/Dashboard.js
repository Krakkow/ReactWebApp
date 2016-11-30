import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'

class Dashboard extends React.Component{


    render() {
        const token = auth.getToken();

        return (
            <div>
                <h1>Dashboard</h1>
                <p>You made it!</p>
                <p>{token}</p>
            </div>
        )
    }
}

export default Dashboard;