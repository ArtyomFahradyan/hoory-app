import {put, takeLatest} from 'redux-saga/effects';
import AXIOS from '../../helpers/services/axios';
import {BACKEND_URL} from '../../configs/constants';
import {getRequestHeaders} from '../../helpers/services/fetch';

import {
    addWorkspaceResponse,
    deleteWorkspaceResponse,
    editUserResponse,
    getUserResponse,
    logoutResponse, removeEditWorkspace,
    signInResponse,
    signUpResponse,
} from '../actions';

import {
    SIGN_IN_REQUEST,
    SIGN_UP_REQUEST,
    GET_USER_REQUEST,
    EDIT_USER_REQUEST,
    LOGOUT_REQUEST,
    DELETE_WORKSPACE_REQUEST,
    ADD_WORKSPACE_REQUEST,
} from '../types';

const baseUrlPath = `${BACKEND_URL}/api/`;

function* singIn({payload} = {}) {
    try {
        const urlPath = `${baseUrlPath}auth/login`;
        const configs = {
            headers: getRequestHeaders('post'),
        };

        const data = JSON.stringify(payload);

        const response = yield AXIOS.post(urlPath, data, configs);
        yield put(signInResponse(response.data));
    } catch (e) {
        yield put(signInResponse(e));
    }
}

function* singUp({payload} = {}) {
    try {
        const urlPath = `${baseUrlPath}auth/signup`;
        const configs = {
            headers: getRequestHeaders('post'),
        };

        const data = JSON.stringify(payload);
        const response = yield AXIOS.post(urlPath, data, configs);
        yield put(signUpResponse(response.data));
    } catch (e) {
        yield put(signUpResponse(e));
    }
}

function* editUser({payload} = {}) {
    try {
        const urlPath = `${baseUrlPath}users/editUser`;
        const configs = {
            headers: getRequestHeaders('put'),
        };

        const data = JSON.stringify(payload);
        const response = yield AXIOS.put(urlPath, data, configs);
        yield put(editUserResponse(response.data));
        yield put(removeEditWorkspace());
    } catch (e) {
        yield put(editUserResponse(e));
    }
}

function* addWorkspace({payload} = {}) {
    try {
        const urlPath = `${baseUrlPath}users/addWorkspace`;
        const configs = {
            headers: getRequestHeaders('put'),
        };

        const data = JSON.stringify(payload);
        const response = yield AXIOS.put(urlPath, data, configs);
        yield put(addWorkspaceResponse(response.data));
    } catch (e) {
        yield put(addWorkspaceResponse(e));
    }
}

function* deleteWorkspace({payload} = {}) {
    try {
        const urlPath = `${baseUrlPath}users/deleteWorkspace/${payload.userId}/${payload.spaceId}`;
        const configs = {
            headers: getRequestHeaders('delete'),
        };

        const response = yield AXIOS.delete(urlPath, configs);
        yield put(deleteWorkspaceResponse(response.data));
    } catch (e) {
        yield put(deleteWorkspaceResponse(e));
    }
}

function* logout({payload} = {}) {
    try {
        const urlPath = `${baseUrlPath}auth/logout`;
        const configs = {
            headers: getRequestHeaders('get'),
        };

        const response = yield AXIOS.get(urlPath, configs);
        yield put(logoutResponse(response.data));
    } catch (e) {
        yield put(logoutResponse(e));
    }
}

function* getUser() {
    try {
        const urlPath = `${baseUrlPath}users/me`;
        const configs = {
            headers: getRequestHeaders('get'),
        };

        const response = yield AXIOS.get(urlPath, configs);
        yield put(getUserResponse(response.data));
    } catch (e) {
        yield put(getUserResponse(e));
    }
}

export default function* adminSaga() {
    yield takeLatest(SIGN_IN_REQUEST, singIn);
    yield takeLatest(LOGOUT_REQUEST, logout);
    yield takeLatest(SIGN_UP_REQUEST, singUp);
    yield takeLatest(GET_USER_REQUEST, getUser);
    yield takeLatest(EDIT_USER_REQUEST, editUser);
    yield takeLatest(DELETE_WORKSPACE_REQUEST, deleteWorkspace);
    yield takeLatest(ADD_WORKSPACE_REQUEST, addWorkspace);
}