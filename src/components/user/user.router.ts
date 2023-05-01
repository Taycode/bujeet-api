// import {validateToken} from "../../middleware/auth.middleware";
import {BaseRouter} from "../../common/base.router";
import {UserController} from "./user.controller";

export class UserRouter extends BaseRouter<UserController>{
    protected initRoutes() {
        this.router.post('/login', this.controller.loginUser);
        this.router.post('/register', this.controller.registerUser);
    }
}
