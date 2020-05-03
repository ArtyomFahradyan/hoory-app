import React from 'react';
import classNames from 'classnames';
import {withRouter, matchPath} from 'react-router-dom';
import {LOGIN_PAGE} from '../../configs/constants';

const MainLayout = (props) => {
    const isLoginPage = matchPath(props.location.pathname, {path: LOGIN_PAGE});

    const layoutClassName = classNames({
        'layout' : !isLoginPage,
        'login-page': isLoginPage,
    });

    return (
        <div className={layoutClassName}>
            {props.children}
        </div>
    );
};

export default withRouter(MainLayout);
