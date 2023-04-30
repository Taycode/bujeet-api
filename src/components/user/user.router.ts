import { Router } from 'express';
import {validateToken} from "../../middleware/auth.middleware";
import {UserModule} from "./user.module";

const userModule = new UserModule();
const userController = userModule.userController;

const router: Router = Router();

router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);
router.get('/fetch', validateToken, userController.fetchLoggedInUser);

export const UserRouter: Router = router;
