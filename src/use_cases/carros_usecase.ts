import { ICarros, Carros, Categoria } from '../domain/Carros'
import { IRepository } from '../repository/IRepository';
import { IUseCase } from './IUseCase';


class CarrosUseCase implements IUseCase {
    repo: IRepository;
    carros: Carros;

    constructor(repo: IRepository) {
        this.repo = repo;
    }

    recuperaCarros(): ICarros[] {
        const carros = data
        return carros
    }
    getFromType(type:Categoria): ICarros[]  {
        return data.filter(item =>{
            if(item.categoria === type){
                return true;
            } else {
                return false;
            }
        });
    }

    getFromName(modelo:string): ICarros[]  {
        return data.filter(item => 
            item.modelo.toLowerCase().indexOf(modelo.toLowerCase())> -1
            );        
    }  
}

const  data: ICarros[] = [
    {
        modelo: 'Onix',
        marca: 'Chevrolet',
        categoria: 'hatch',
        
    },
    {
        modelo: 'Ecosport',
        marca: 'ford',
        categoria: 'suv',
        
    },  
     {
        modelo: 'Civic',
        marca: 'Honda',
        categoria: 'sedan',
        
    },
    {
        modelo: 'S10',
        marca: 'Blazer',
        categoria: 'suv',
        
    },
    {
        modelo: 'BRavo',
        marca: 'Fiat',
        categoria: 'hatch',
        
    }
]

export { CarrosUseCase }


