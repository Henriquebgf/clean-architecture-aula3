import { ICarros } from "../domain/Carros";

interface IRepository {
    read(): Array<ICarros>;
}

export { IRepository }