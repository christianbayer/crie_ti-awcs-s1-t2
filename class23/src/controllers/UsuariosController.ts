import { Request, Response } from 'express';
import { Usuario } from '../models/Usuario';
import { ILike } from 'typeorm';

export class UsuariosController {

  async list (req: Request, res: Response): Promise<Response> {
    let nome = req.query.nome;

    let users: Usuario[] = await Usuario.findBy({
      nome: nome ? ILike(`%${nome}%`) : undefined
    });

    return res.status(200).json(users);
  }

  async find (req: Request, res: Response): Promise<Response> {
    let usuario: Usuario = res.locals.usuario;

    return res.status(200).json(usuario);
  }

  async create (req: Request, res: Response): Promise<Response> {
    let body = req.body;

    let usuario: Usuario = await Usuario.create({
      nome: body.nome,
      email: body.email,
      senha: body.senha,
    }).save();

    return res.status(200).json(usuario);
  }

  async update (req: Request, res: Response): Promise<Response> {
    let body = req.body;
    let usuario: Usuario = res.locals.usuario;

    usuario.nome = body.nome;
    usuario.email = body.email;
    usuario.senha = body.senha;
    await usuario.save();

    return res.status(200).json(usuario);
  }

  async delete (req: Request, res: Response): Promise<Response> {
    let usuario: Usuario = res.locals.usuario;

    usuario.remove();

    return res.status(200).json();
  }

}
