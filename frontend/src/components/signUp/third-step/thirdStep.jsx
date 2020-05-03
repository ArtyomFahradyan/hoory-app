import React from 'react';
import BtnGoogle from '../../core/googleSignUpBtn';
import Input from '../../core/input';
import Button from '../../core/button/button';
import TwoInputInOne from '../../core/twoInputsInOne';
import {Link} from 'react-router-dom';

const ThirdStep = (props) => {

    return (
        <div className="signup-content-form">
            <div className="form-state signup-form-control">
                <h2 className="form-label">Create your account</h2>
            </div>
            <div className="form-state signup-form-control">
                <BtnGoogle />
            </div>
            <div className="form-state signup-form-control">
                <h3 className="singup-or"><span>or</span></h3>
            </div>
            <div className="signup-form-control">
                <TwoInputInOne
                    onChange={email => props.setUser({
                        ...props.user,
                        email,
                    })}
                    firstInputValue={props.user.firstName}
                    secondInputValue={props.user.lastName}
                    setSecondInputValue={lastName =>  props.setUser({
                        ...props.user,
                        lastName,
                    })}
                    setFirstInputValue={firstName =>  props.setUser({
                        ...props.user,
                        firstName,
                    })}
                    type="text"
                    firstInputPlaceholder="First Name"
                    secondInputPlaceholder="Last Name"
                    textCenter={false}
                    filedId="email" />
            </div>
            <div className="signup-form-control">
                <Input
                    required={true}
                    onChange={email => props.setUser({
                        ...props.user,
                        email,
                    })}
                    name="email"
                    value={props.user.email}
                    type="text"
                    placeholder="Email"
                    textCenter={false}
                    filedId="email" />
            </div>
            <div className="signup-form-control password-wrapper">
                <Input
                    required={true}
                    onChange={password => props.setUser({
                        ...props.user,
                        password,
                    })}
                    name="password"
                    placeholder="Password"
                    value={props.user.password}
                    type="password"
                    textCenter={false}
                    filedId="password" />
            </div>
            <div className="signup-form-control privacy-policy">
                <span>By registering an account with us you agree to the PP and T&C</span>
            </div>
            <div className="form-state">
                <Button
                    disabled={
                        !props.user.firstName || !props.user.email || !props.user.lastName || !props.user.password
                    }
                    style={{width: '100%'}}
                    action={props.handleNextStep}
                    text="Create account"
                    type="success"/>
            </div>
            <div className="signup-form-control have-account">
                <span>Have an account?
                    <Link
                        to={{
                            pathname: '/login',
                        }}
                        className='list-item-settings__item'
                    >
                        Sign in
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default ThirdStep;