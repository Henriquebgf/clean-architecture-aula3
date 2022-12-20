import { ICarros } from "../domain/Carros";
import { IRepository } from "./IRepository";

class CarrosRepository implements IRepository {
    read() : Array<ICarros> {
        const lista = new Array<ICarros>();
        return lista;
    }
}

export { CarrosRepository }