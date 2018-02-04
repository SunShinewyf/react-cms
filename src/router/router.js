import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from 'pages/Home/Home'
import User from 'pages/User/User';
import Counter from 'pages/Counter/Counter';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';

const Routers = () => (
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
        </Switch>
    </Router>
);

export default Routers;