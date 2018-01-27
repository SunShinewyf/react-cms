import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from 'pages/Home/Home';
import User from 'pages/User/User';
import Counter from 'pages/Counter/Counter';

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/user">User</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/user" component={User} />
                <Route path="/counter" component={Counter}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;