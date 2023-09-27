import express, { Express } from 'express';
import cors from 'cors';
import usuariosRoutes from './routes/usuarios';

const PORT: Number = Number(process.env.SERVER_PORT || 3000);

let server: Express = express();

server.use(cors());
server.use(express.json());

server.use(usuariosRoutes);

export default {
  start () {
    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}!`);
    });
  }
};
