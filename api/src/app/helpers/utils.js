import moment from 'moment';
import * as jwt from 'jsonwebtoken';
import params from '../configs/params';

export default class Utils {
    static signJWTToken(data, admin = false) {
        const payload = { id: data._id, created_at: moment().toString() };
        let secret = admin ? params.adminTokenSecret : params.userTokenSecret;

        let token = jwt.sign(payload, secret);

        return { token };
    }

    static verifyJWTToken(token, secret = params.userTokenSecret) {
        try {
            return jwt.verify(token, secret);
        } catch (e) {
            return null;
        }
    }
}
