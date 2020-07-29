import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Logon from '../views/Logon'
import NewIncident from '../views/NewIncident'
import Profile from '../views/Profile'
import Register from '../views/Register'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}
