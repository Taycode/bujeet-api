import express, {Router} from "express";

export abstract class BaseRouter<C> {
    // Base Router
    protected router: Router;

    constructor(
        protected readonly controller: C,
    ) {
        this.router = Router();
        this.initRoutes();
    }

    /**
     * Defines all routes for the parent module
     */
    protected abstract initRoutes(): void;

    /**
     * Return express router defined with module routes
     */
    getRouter(): Router {
        return this.router;
    }
}
