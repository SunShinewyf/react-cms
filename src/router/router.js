import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from 'pages/Home/Home'
import User from 'pages/User/User';
import Counter from 'pages/Counter/Counter';
import Login from 'pages/Login/Login';

const Routers = () => (
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/counter" component={Counter}/>
            <Route path="/" component={Home} />
        </Switch>
    </Router>
);

export default Routers;