import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Login from '../views/Login';
import Dashboard from '../views/Dashboard';
import New from '../views/New';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    );
}