import { Router } from 'express';
import { UserController } from '../components/user/user.controller';
import {validateToken} from "../middleware/auth.middleware";

const userController = new UserController();

const router: Router = Router();

router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);
router.get('/fetch', validateToken, userController.fetchLoggedInUser);

export const UserRouter: Router = router;
