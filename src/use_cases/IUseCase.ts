import { Categoria, ICarros } from "../domain/Carros"

interface IUseCase {
    recuperaCarros(): ICarros[];
    getFromType(type:Categoria): ICarros[] ;
    getFromName(modelo:string): ICarros[]
}

export { IUseCase }
