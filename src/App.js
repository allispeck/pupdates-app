import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import Login from './views/auth/Login';
import Dashboard from './views/Dashboard/Index';
import Register from "./views/auth/Register";
import CreatePet from "./views/Pets/CreatePet";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";


const App = () => {
    return (
        <Router>
           <Navbar/>
            <Switch>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/pet/create' component={CreatePet}/>
            </Switch>
            <Footer/>
        </Router>

    );
};

export default App;