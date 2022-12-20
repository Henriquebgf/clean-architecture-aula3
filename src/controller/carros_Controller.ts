import { Request, Response } from 'express';
import { IUseCase } from '../use_cases/IUseCase';

class Carros_Controller {

    carros_usecase: IUseCase;

    constructor(carros_usecase: IUseCase) {
        console.log(typeof carros_usecase)
        console.log(carros_usecase)
        
        this.carros_usecase = carros_usecase;
    }

    listar_carros(req: Request, resp: Response) {

        const carros = this.carros_usecase.recuperaCarros();
        return resp.status(200).json(carros)
    }
/*
    listar_por_nome(req: Request, resp: Response) {

        const carros = this.carros_usecase.getFromName();
            
        return resp.status(200).json(carros)
    }

    listar_por_tipo(req: Request, resp: Response) {

        const carros = this.carros_usecase.getFromType(type:Categoria): ICarros: any;
        return resp.status(200).json(carros)
    }
    */
}

export { Carros_Controller };
