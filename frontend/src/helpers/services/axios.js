/**
 * This is a wrapper for all AXIOS calls
 * We use axios as our light-weight XHR wrapper
 * [https://github.com/mzabriskie/axios]
 *
 * Usage:
 *    This file exports an instance of axios
 *    As such it includes the regular axios.get() | axios.put() | axios.post()
 *    and so on AXIOS.get() | AXIOS.put() | AXIOS.post()
 *    However, to do a generic axios call you must use AXIOS.request()
 *    All of these methods accept the standard axios config object
 *
 */

import axios from 'axios';

import _ from 'lodash';

import {BACKEND_URL} from '../../configs/constants';

const AXIOS = axios.create({
    baseURL: BACKEND_URL,
});

AXIOS.CancelToken = axios.CancelToken;

AXIOS.interceptors.response.use(result => {
    return result;
}, result => {
    const statusCode = _.get(result, ['response', 'status']);
    const url = _.get(result, ['response', 'config', 'url']);

    if (!result.response) {
        return;
    } else if (statusCode === 403) {
        !url.endsWith('sign_in') && window.location.replace('/login');
    }
    return Promise.reject(result);
});

export default AXIOS;
