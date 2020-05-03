import {createAction} from 'redux-actions';
import * as types from '../types';

export const signInRequest = createAction(types.SIGN_IN_REQUEST, data => data);
export const signUpRequest = createAction(types.SIGN_UP_REQUEST, data => data);
export const getUserRequest = createAction(types.GET_USER_REQUEST);
export const getUserResponse = createAction(types.GET_USER_RESPONSE);
export const signInResponse = createAction(types.SIGN_IN_RESPONSE);
export const signUpResponse = createAction(types.SIGN_UP_RESPONSE);
export const logoutRequest = createAction(types.LOGOUT_REQUEST);
export const logoutResponse = createAction(types.LOGOUT_RESPONSE);
export const setEditWorkspace = createAction(types.SET_EDIT_WORKSPACE, data => data);
export const removeEditWorkspace = createAction(types.REMOVE_EDIT_WORKSPACE);
export const editUserRequest = createAction(types.EDIT_USER_REQUEST, data => data);
export const editUserResponse = createAction(types.EDIT_USER_RESPONSE);
export const deleteWorkspaceRequest = createAction(types.DELETE_WORKSPACE_REQUEST, data => data);
export const deleteWorkspaceResponse = createAction(types.DELETE_WORKSPACE_RESPONSE);
export const addWorkspaceRequest = createAction(types.ADD_WORKSPACE_REQUEST, data => data);
export const addWorkspaceResponse = createAction(types.ADD_WORKSPACE_RESPONSE);
export const setActionResult = createAction(types.ADD_WORKSPACE_RESPONSE);