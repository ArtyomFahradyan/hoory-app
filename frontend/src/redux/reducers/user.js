import * as types from '../types';
import {createReducer} from '../../helpers/utilities';
import {StorageManager} from '../../helpers/utilities';

const hasError = result => {
    return !!(!result || result.error || result instanceof Error);
};

const initialState = {
    user: null,
    actionResult: null,
    isFetching: false,
    workspace: null,
};

const updateStore = (state, newState) => ({
    ...state,
    ...newState,
});

const signInRequest = (state, action) => {
    return updateStore(state, {
        actionResult: null,
        isFetching: true,
    });
};

const signInResponse = (state, action) => {
    const {payload} = action;
    StorageManager.set('session', payload.access_token);
    return updateStore(state, {
        user: payload.user,
        actionResult: {
            type: 'success',
            redirect: true,
        },
        isFetching: false,
    });
};

const getUserRequest = (state, action) => {
    return updateStore(state, {
        actionResult: null,
        isFetching: true,
    });
};

const setEditWorkspace = (state, action) => {
    const {payload} = action;
    return updateStore(state, {
        workspace: payload,
    });
};

const removeEditWorkspace = (state, action) => {
    return updateStore(state, {
        workspace: null,
    });
};

const setActionReslut = (state, action) => {
    const {payload} = action;
    return updateStore(state, {
        actionResult: payload,
    });
};

const handleLogout = (state, action) => {
    StorageManager.remove('session');
    return updateStore(state, {
        user: null,
        actionResult: null,
        isFetching: false,
        workspace: null,
    });
};

const handleLogoutRequest = (state, action) => {
    return updateStore(state, {
        isFetching: true,
    });
};

const editUserReques = (state, action) => {
    return updateStore(state, {
        isFetching: true,
        actionResult: null,
    });
};

const editUserResponse = (state, action) => {
    const {payload} = action;
    return updateStore(state, {
        user: payload.user,
        actionResult: {
            type: 'success',
        },
        isFetching: false,
    });
};


const getUserResponse = (state, action) => {
    const {payload} = action;

    return updateStore(state, {
        user: payload,
        actionResult: {
            type: 'success',
        },
        isFetching: false,
    });
};

const deleteWorkspaceRequest = (state, action) => {
    return updateStore(state, {
        isFetching: true,
        actionResult: null,
    });
};

const deleteWorkspaceResponse = (state, action) => {
    const {payload} = action;

    return updateStore(state, {
        user: payload,
        actionResult: {
            type: 'success',
        },
        isFetching: false,
    });
};

const signUpResponse = (state, action) => {
    return updateStore(state, {
        isFetching: false,
        actionResult: null,
    });
};

const signUpRequest = (state, action) => {
     return updateStore(state, {
        actionResult: null,
        isFetching: true,
    });
};

const addWorkspaceRequest = (state, action) => {
    return updateStore(state, {
        isFetching: true,
        actionResult: null,
    });
};

const addWorkspaceResponse = (state, action) => {
    const {payload} = action;

    return updateStore(state, {
        user: payload,
        actionResult: {
            type: 'success',
        },
        isFetching: false,
    });
};

export const handlers = {
    [types.LOGOUT_RESPONSE]: handleLogout,
    [types.LOGOUT_REQUEST]: handleLogoutRequest,
    [types.SIGN_IN_REQUEST]: signInRequest,
    [types.SIGN_IN_RESPONSE]: signInResponse,
    [types.GET_USER_RESPONSE]: getUserResponse,
    [types.GET_USER_REQUEST]: getUserRequest,
    [types.SET_EDIT_WORKSPACE]: setEditWorkspace,
    [types.REMOVE_EDIT_WORKSPACE]: removeEditWorkspace,
    [types.EDIT_USER_REQUEST]: editUserReques,
    [types.EDIT_USER_RESPONSE]: editUserResponse,
    [types.DELETE_WORKSPACE_REQUEST]: deleteWorkspaceRequest,
    [types.DELETE_WORKSPACE_RESPONSE]: deleteWorkspaceResponse,
    [types.ADD_WORKSPACE_REQUEST]: addWorkspaceRequest,
    [types.ADD_WORKSPACE_RESPONSE]: addWorkspaceResponse,
    [types.SIGN_UP_REQUEST]: signUpRequest,
    [types.SIGN_UP_RESPONSE]: signUpResponse,
    [types.SET_ACTION_RESULT]: setActionReslut,
};

export default createReducer(initialState, handlers);