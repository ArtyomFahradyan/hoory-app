/* eslint-disable max-len */
import React from 'react';
import {Switch, Route, Redirect, Router} from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import Login from '../components/login';
import {LOGIN_PAGE, SIGNUP_PAGE, DASHBOARD_PAGE} from '../configs/constants';
import {StorageManager} from '../helpers/utilities';
import history from './history';
import SignUp from '../components/signUp';
import AdminDashboard from '../components/adminDashboard';
import ProtectedRoute from '../helpers/services/auth';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getUserRequest} from '../redux/actions';

const Routes = () => {
    const isLoggedIn = StorageManager.get('session');
    const {user} = useSelector((state) => state.user, shallowEqual);
    const dispatch = useDispatch();
    if (isLoggedIn && !user) {
        dispatch(getUserRequest());
    }

    return (
        <>
            <Router history={history}>
                <MainLayout>
                    <main className="main-container">
                            <Switch>
                                <Redirect exact from="/" to="/login" />
                                <ProtectedRoute exact path={DASHBOARD_PAGE} component={AdminDashboard} isAuth={isLoggedIn} />
                                <Route exact path={LOGIN_PAGE} component={Login} />
                                <Route exact path={SIGNUP_PAGE} component={SignUp} />
                                <Route component={() => <div className="not-found">Not found 404</div>} />
                            </Switch>
                    </main>
                </MainLayout>
            </Router>
        </>
    );
};

export default Routes;
