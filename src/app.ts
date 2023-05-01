import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Route } from './routes';
import { Database } from './database';
import {Cron} from "./cron";
import {Tasks} from "./worker/tasks";

export const App = {
  async boot () {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    await Database.connect();
    Route(app);
    Cron();
    Tasks();
    return app;
  }
};
