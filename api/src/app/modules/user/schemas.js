import { USER_AUTH } from '../../configs/constants';

export default {
    me: {
        authentication: true,
        authenticationType: USER_AUTH
    },
    editUser: {
        authentication: true,
        authenticationType: USER_AUTH
    },
    deleteWorkspace: {
        authentication: true,
        authenticationType: USER_AUTH
    },
    addWorkspace: {
        authentication: true,
        authenticationType: USER_AUTH
    },
};
