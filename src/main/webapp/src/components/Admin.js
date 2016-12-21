/**
 * Created by ilya on 14/12/2016.
 */
import React from 'react';
import Menu from './common/Menu';
import companies from 'json!../data/Company.json';
//import customers from '../data/Customer.json';

class Admin extends React.Component {


    constructor() {
        super();
        this.state = {
            apiLink: ["customers", "company", "customer" ]
        };
    }
    renderCompanies(){
        console.log("hello ");
        return
        const element = (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );

    }

    render() {
        return (
            // <div>
            //     <Menu companies={this.renderCompanies} clientType="Admin"  />
            // </div>
            <div>{this.renderCompanies}</div>
        );
    }

}

export default Admin;

/*
 { companies.map(company =>
 <div  key={company.id} className="col-md-3">
 <div className="row-fluid">
 <div className="span3 PlanPricing template4">
 <div className="planName"> <span className="price">$99</span>
 <h3>{company.compName}</h3>
 <p>Monthly Plan</p>
 </div>
 <div className="planFeatures">
 <ul>

 <li>aasdasdassddasd</li>

 </ul>
 </div>
 <p> <a href="#Signup" role="button" data-toggle="modal" className="btn btn-success">Choose Fart </a> </p>
 </div>
 </div>
 </div>
 )}
 */