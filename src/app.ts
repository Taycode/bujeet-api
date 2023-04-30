import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Route } from './routes';
import { Database } from './database';

export const App = {
  async boot () {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    await Database.connect();
    Route(app);
    // Cron();
    return app;
  }
};
