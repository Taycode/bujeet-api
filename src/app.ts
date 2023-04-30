import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Route } from './routes';
import { Database } from './database';
import { ExpressAdapter } from '@bull-board/express';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/dist/src/queueAdapters/bull';

export const App = {
  async boot () {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    // await Database.connect();
    Route(app);
    // Cron();
    return app;
  }
};
