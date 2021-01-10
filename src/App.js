import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Login from './views/auth/Login';
import Dashboard from './views/Dashboard/Index';

const App = () => {
    return (
        <Router>
            <div>
                <NavLink to='/dashboard'>Dashboard</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </div>
            <Switch>
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/login' component={Login} />
            </Switch>
        </Router>
    );
};

export default App;