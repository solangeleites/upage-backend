import express, { Express } from 'express';

import { conectarDB } from '../database/config';

import formRoutes from '../routes/form';


export class Server {
  app: Express;

  constructor() {
    this.app = express();
    this.conexionDB();
    this.middlware();
    this.routes();    
  }

  async conexionDB(): Promise<void> {
    await conectarDB();
  }
  middlware(): void {
    this.app.use(express.json());
  }
  routes(): void {
    this.app.use('/form', formRoutes);
  }

  listen(): void {
    this.app.listen(3000, () => {
      console.log('Corriendo en el puerto 3000');
    });
  }
}
