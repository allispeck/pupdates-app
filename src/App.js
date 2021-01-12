import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Login from './views/auth/Login';
import Dashboard from './views/Dashboard/Index';
import Register from "./Register";

const App = () => {
    return (
        <Router>
            <div>
                <NavLink to='/dashboard'>Dashboard</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </div>
            <Switch>
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </Switch>
        </Router>
    );
};

export default App;