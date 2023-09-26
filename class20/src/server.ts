import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { Usuario } from './models/Usuario';

let server: Express = express();

server.use(cors());
server.use(express.json());

server.get('/usuarios', async (req: Request, res: Response): Promise<Response> => {
  let users: Usuario[] = await Usuario.find();

  return res.status(200).json(users);
});

server.post('/usuarios', async (req: Request, res: Response): Promise<Response> => {
  let body = req.body;

  let usuario: Usuario = await Usuario.create({
    nome: body.nome,
    email: body.email,
    senha: body.senha,
  }).save();

  return res.status(200).json(usuario);
});

server.put('/usuarios/:id', async (req: Request, res: Response): Promise<Response> => {
  let body = req.body;
  let id = Number(req.params.id);

  let usuario: Usuario|null = await Usuario.findOneBy({ id });
  if (! usuario) {
    return res.status(422).json({ error: 'Usuario não encontrado!' });
  }

  usuario.nome = body.nome;
  usuario.email = body.email;
  usuario.senha = body.senha;
  await usuario.save();

  return res.status(200).json(usuario);
});

server.delete('/usuarios/:id', async (req: Request, res: Response): Promise<Response> => {
  let id = Number(req.params.id);

  let usuario: Usuario|null = await Usuario.findOneBy({ id });
  if (! usuario) {
    return res.status(422).json({ error: 'Usuario não encontrado!' });
  }

  usuario.remove();

  return res.status(200).json();
});

server.get('/usuarios/:id', async (req: Request, res: Response): Promise<Response> => {
  let id = Number(req.params.id);

  let usuario: Usuario|null = await Usuario.findOneBy({ id });
  if (! usuario) {
    return res.status(422).json({ error: 'Usuario não encontrado!' });
  }

  return res.status(200).json(usuario);
});

export default {
  start () {
    server.listen(3000, () => {
      console.log('Server started on port 3000!');
    });
  }
};
