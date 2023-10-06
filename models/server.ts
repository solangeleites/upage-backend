import express, { Express } from 'express';

import { conectarDB } from '../database/config';

export class Server {
  app: Express;

  constructor() {
    this.app = express();
    this.conexionDB();
    this.middlware();
  }

  async conexionDB(): Promise<void> {
    await conectarDB();
  }
  middlware(): void {
    this.app.use(express.json());
  }

  listen(): void {
    this.app.listen(3000, () => {
      console.log('Corriendo en el puerto 3000');
    });
  }
}
