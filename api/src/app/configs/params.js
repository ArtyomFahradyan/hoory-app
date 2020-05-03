import {
    apiUrl,
    appUrl,
    apiPort,
    userTokenSecret
} from '../helpers/config';

const params = {
    development: {
        apiUrl,
        appUrl,
        apiPort,
        userTokenSecret,
    },
    production: {
        apiUrl,
        appUrl,
        apiPort,
        userTokenSecret,
    }
};

export default params[process.env.NODE_ENV || 'development'];
