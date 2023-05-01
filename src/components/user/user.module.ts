import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserRepository } from "../../database/repository/user.repository";
import {UserRouter} from "./user.router";

export class UserModule {
    userService: UserService;
    userController: UserController;
    userRouter: UserRouter;

    constructor() {
        this.userService = new UserService();
        this.userController = new UserController(this.userService); //// Pass the userRepository to the UserController
        this.userRouter = new UserRouter(this.userController);
    }
}

const userModule = new UserModule();
export const userRouter = userModule.userRouter.getRouter();
