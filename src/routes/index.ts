import { Express, Request, Response } from 'express';
import {BudgetRouter} from "../components/budget/budget.router";
import {userRouter} from "../components/user/user.module";

export const Route = (app: Express) => {
    app.use('/user', userRouter);
    app.use('/budget', BudgetRouter);
    app.get('/', async (req: Request, res: Response) => {
    res.send('Hello World');
  });
  return app;
};
