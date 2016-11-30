import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CouponsPage from './components/coupon/CouponsPage';
import LoginPage from './components/login/LoginPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute path="/" component={LoginPage} />
        <Route path="home" component={HomePage}/>
        <Route path="coupons" component={CouponsPage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);