import { Express, Request, Response } from 'express';
import { UserRouter } from './user.router';

export const Route = (app: Express) => {
  app.use('/user', UserRouter);
  app.get('/', async (req: Request, res: Response) => {
    res.send('Hello World');
  });
  return app;
};
