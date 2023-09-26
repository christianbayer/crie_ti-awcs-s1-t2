import express, { Express, Request, Response } from 'express';
import cors from 'cors';

let server: Express = express();

server.use(cors());
server.use(express.json());

server.get('/', (req: Request, res: Response): Response => {
  return res.status(200).json({ text: 'Hello world!' });
});

server.post('/', (req: Request, res: Response): Response => {
  let body = req.body;
  let name = body.name;

  return res.status(200).json({ text: `Hello, ${name}!` });
});

server.listen(3000, () => {
  console.log('Server started on port 3000!');
});
