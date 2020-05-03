import url from 'url';
import _ from 'lodash';

export const BACKEND_URL = url.format({
    protocol: _.get(process.env, 'REACT_APP_BACKEND_PROTOCOL'),
    hostname: _.get(process.env, 'REACT_APP_BACKEND_HOSTNAME'),
    port: _.get(process.env, 'REACT_APP_BACKEND_PORT'),
});
/**
 Routes
**/

export const EDIT_TEMPLATE = /templates\/(\S+|new)/;
export const LOGIN_PAGE = '/login';
export const SIGNUP_PAGE = '/signup';
export const DASHBOARD_PAGE = '/dashboard';

/**
 * Steps
 */

export const defSteps = {
    FIRST_STEP: {
        text: 'Name your assistant',
        value: 'FIRST_STEP',
        done: false,
    },
    SECOND_STEP: {
        text: 'Select styles',
        value: 'SECOND_STEP',
        done: false,
    },
    THIRD_STEP: {
        text: 'Create your account',
        value: 'THIRD_STEP',
        done: false,
    },
};

/**
 *  Colors
 */

export const colors = [
    {
        value: '1',
        color: '#6632fc',
    },
    {
        value: '2',
        color: '#8fce41',
    },
    {
        value: '3',
        color: '#f89939',
    },
    {
        value: '4',
        color: '#cb2b3d',
    },
    {
        value: '5',
        color: '#7344c0',
    },
    {
        value: '6',
        color: '#aa39a8',
    },
    {
        value: '7',
        color: '#3aa0ec',
    },
];

export const TIMEOUT_TO_HIDE_SUCCESS_NOTIFICATION = 3000;
export const TIMEOUT_TO_HIDE_ERROR_NOTIFICATION = 7000;