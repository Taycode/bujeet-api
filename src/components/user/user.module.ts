import {UserService} from "./user.service";
import {UserController} from "./user.controller";

export class UserModule {
    userService: UserService;
    userController: UserController;

    constructor() {
        this.userService = new UserService();
        this.userController = new UserController(this.userService);
    }
}
