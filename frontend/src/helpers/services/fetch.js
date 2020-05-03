import _ from 'lodash';
import {StorageManager} from '../utilities/';

export const getRequestHeaders = requestType => {
    const session = StorageManager.get('session');
    return _.cond([
        [_.matches('get'), _.constant({
            'Accept': 'application/json, text/plain, */*',
            'Authorization': `Bearer ${session}`,
        })],
        [_.matches('post'), _.constant({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session}`,
        })],
        [_.matches('put'), _.constant({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session}`,
        })],
        [_.matches('delete'), _.constant({
            'Accept': 'application/json',
            'Authorization': `Bearer ${session}`,
        })],
    ])(requestType);
};