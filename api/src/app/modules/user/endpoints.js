import { UserController } from './user.controller';
import middlewares from '../../middlewares/index';
import schemas from './schemas';

export default (router) => {
    router.get('/me', ...middlewares(schemas, 'me'), UserController.getUser);
    router.delete('/deleteWorkspace/:userId/:spaceId', ...middlewares(schemas, 'deleteWorkspace'), UserController.deleteWorkspace);
    router.put('/addWorkspace', ...middlewares(schemas, 'addWorkspace'), UserController.addWorkspace);
    router.put('/editUser', ...middlewares(schemas, 'editUser'), UserController.editUser);
};
