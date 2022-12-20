import express from 'express'

import { Router, Request, Response } from 'express';
import { criaControllerFactory } from './infra/factories';

const app = express();

const route = Router()

app.use(express.json())

const carroController = criaControllerFactory();

route.get("/carro", (req: Request, res: Response) => { carroController.listar_carros(req, res) });

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Servidor rodando...' })
})

app.use(route)


app.listen(3333, () => 'server running on port 3333')
