import { UserService } from '../../services/index';
import { SUCCESS_CODE } from '../../configs/status-codes';
import { BadRequest } from '../../errors/index';
import {
    FILL_ALL_FIELDS,
    ALREADY_EXISTS,
    INVALID_EMAIL_OR_PASSWORD,
} from '../../configs/constants';
import Utils from '../../helpers/utils';

export class AuthController {
    static async signup(req, res, next) {
        const payload = req.body;
        try {
            if (
                !payload.user.firstName ||
                !payload.user.lastName ||
                !payload.user.email ||
                !payload.user.password ||
                !payload.assistant ||
                !payload.assistant.name
            ) {
                throw new BadRequest(FILL_ALL_FIELDS);
            }

            let user = await UserService.getByEmail(payload.user.email);

            if (user) {
                throw new BadRequest(ALREADY_EXISTS('Email'));
            }

            await UserService.create({
                ...payload.user,
                workspaces: [ payload.assistant ]
            });

            return res.status(SUCCESS_CODE).json({ success: true });
        } catch(err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        const { email, password } = req.body;

        try {
            let user = await UserService.getByEmail(email);

            if (!user || !user.comparePassword(password)) {
                throw new BadRequest(INVALID_EMAIL_OR_PASSWORD);
            }

            const tokenInfo = Utils.signJWTToken(user);

            return res.status(SUCCESS_CODE)
                    .json({
                        access_token: tokenInfo.token,
                        user
                    });
        } catch (err) {
            next(err);
        }
    }

    static async logout(req, res, next) {
        try {
            req.logout();

            return res.status(SUCCESS_CODE).json({success: true});
        } catch (err) {
            next(err);
        }
    }

}
