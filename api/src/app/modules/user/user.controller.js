import Utils from '../../helpers/utils';
import { UserService } from '../../services';
import { SUCCESS_CODE } from '../../configs/status-codes';
import { NotFound } from '../../errors';
import { NOT_EXISTS } from '../../configs/constants';

export class UserController {
    static async getUser(req, res, next) {
        try {
            const { authorization } = req.headers;
            const token = authorization.replace('Bearer ', '');

            const tokenInfo = await Utils.verifyJWTToken(token);
            const user = await UserService.getById(tokenInfo.id);


            if (!user) {
                throw new NotFound(NOT_EXISTS('User'));
            }

            return res.status(SUCCESS_CODE).json(user);
        } catch (err) {
            next(err);
        }
    }

    static async editUser(req, res, next) {
        const { assistant, userId } = req.body;
        try {
            const existingUser = await UserService.getById(userId);

            existingUser.workspaces = existingUser.workspaces.map(workspace => {
                if (workspace._id.toString() === assistant._id.toString()) {
                    return assistant;
                }

                return workspace;
            });

            existingUser.save();

            return res.status(SUCCESS_CODE).json(existingUser);
        } catch (err) {
            next(err);
        }
    }

    static async addWorkspace(req, res, next) {
        const { assistant, userId } = req.body;
        try {
            const user = await UserService.getById(userId);

            user.workspaces.push(assistant);

            user.save();

            return res.status(SUCCESS_CODE).json(user);
        } catch (err) {
            next(err);
        }
    }

    static async deleteWorkspace(req, res, next) {
        const { userId, spaceId } = req.params;
        try {
            const user = await UserService.getById(userId);

            if (!user) {
                throw new NotFound(NOT_EXISTS('User'));
            }

            user.workspaces = user.workspaces.filter(workspace => workspace._id.toString() !== spaceId);

            user.save();

            return res.status(SUCCESS_CODE).json(user);
        } catch (err) {
            next(err);
        }
    }

}
