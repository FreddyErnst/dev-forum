import React from 'react'
import {Switch, Route} from 'react-router-dom'
import GuestLanding from './components/GuestLanding/GuestLanding';
import UserLanding from './components/UserLanding/UserLanding';
import Posts from './components/Posts/Posts';

export default (
    <Switch>
        <Route component={GuestLanding} exact path ='/'/>
        <Route component={UserLanding} path = '/topics'/>
        <Route component={Posts} path = '/posts/:topicId'/>
        <Route render={() => {
            return <h1>404 Not Found</h1>
        }} />
    </Switch>
)