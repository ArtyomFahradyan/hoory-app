import { AuthController } from './auth.controller';
import middlewares from '../../middlewares/index';
import schemas from './schemas';

export default (router) => {
    router.post('/signup', AuthController.signup);
    router.post('/login', AuthController.login);
    router.get('/logout', ...middlewares(schemas, 'logout') , AuthController.logout);
};
