import React, {useState} from 'react';
import BtnGoogle from '../core/googleSignUpBtn/button';
import Input from '../core/input';
import Button from '../core/button/button';
import {Link} from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {signInRequest} from '../../redux/actions';
import hooryIcon from '../../images/hoory logo.svg';
import {DASHBOARD_PAGE, LOGIN_PAGE, SIGNUP_PAGE} from '../../configs/constants';
import {setActionResult} from '../../redux/actions/user';

const Login = (props) => {
    const dispatch = useDispatch();
    const {actionResult} = useSelector((state) => state.user, shallowEqual);
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    if (actionResult && actionResult.type === 'success' && actionResult.redirect) {
        props.history.push(DASHBOARD_PAGE);
        dispatch(setActionResult(null));
    }
    return (
        <div className="signup-content-form">
            <div className="step-logo">
                <img src={hooryIcon} alt="hooryIcon"/>
            </div>
            <div className="form-state signup-form-control">
                <h2 className="form-label">Sign in to your account</h2>
            </div>
            <div className="form-state signup-form-control">
                <BtnGoogle />
            </div>
            <div className="form-state signup-form-control">
                <h3 className="singup-or"><span>or</span></h3>
            </div>
            <div className="signup-form-control">
                <Input
                    required={true}
                    onChange={email => setUser({
                        ...user,
                        email,
                    })}
                    name="email"
                    value={user.email}
                    type="text"
                    placeholder="Email"
                    textCenter={false}
                    filedId="email" />
            </div>
            <div className="signup-form-control password-wrapper">
                <Input
                    required={true}
                    onChange={password => setUser({
                        ...user,
                        password,
                    })}
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    type="password"
                    textCenter={false}
                    filedId="password" />
            </div>
            <div className="form-state">
                <Button
                    disabled={
                        !user.email || !user.password
                    }
                    style={{width: '100%'}}
                    action={() => {
                        dispatch(signInRequest(user));
                    }}
                    text="Sign In"
                    type="success"/>
            </div>
            <div className="signup-form-control have-account">
                <span>
                    Don't have an account?
                    <Link
                        to={{
                            pathname: SIGNUP_PAGE,
                        }}
                        className='list-item-settings__item'>
                         Sign up
                    </Link>
                </span>
            </div>
            <div className="signup-form-control have-account">
                <span>
                    <Link
                        to={{
                            pathname: LOGIN_PAGE,
                        }}
                        className='list-item-settings__item'>
                        Forgot password?
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Login;