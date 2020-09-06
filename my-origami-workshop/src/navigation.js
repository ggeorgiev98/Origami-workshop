import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Publications from './pages/publications/index'
import ShareThoughtsPage from './pages/share-thoughts/index';
import RegisterPage from './pages/register/index';
import LoginPage from './pages/login/index';
import ProfilePage from './pages/profile';
import ErrorPage from './pages/error';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Publications} />
                <Route path='/share' component={ShareThoughtsPage} />
                <Route path='/register' component={RegisterPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/profile/:userId' component={ProfilePage} />
                <Route path='/error' component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;