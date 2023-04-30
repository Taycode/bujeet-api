import { config } from './src/config/config';

import http from 'http';
import { App } from './src/app';

const PORT = config.PORT;

const Server = {
  async start () {
    const app = await App.boot();
    const server = http.createServer(app);
    return server.listen(PORT);
  }
};

Server.start()
  .then(() => console.log(`Listening to server on http://localhost:${PORT}`));
