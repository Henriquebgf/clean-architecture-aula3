
interface ICarros {
    modelo: string;
    marca: string
    categoria: Categoria
}

export type Categoria = 'hatch' | 'sedan' | 'suv' | 'coupe'

class Carros implements ICarros {
    modelo: string;
    marca: string
    categoria: Categoria

    constructor(modelo: string, marca: string, categoria: Categoria) {
        this.modelo = modelo;
        this.marca = marca;
        this.categoria = categoria;
        
    }
    
    get getmodelo() {
        return this.modelo;
    }

    get getmarca() {
        return this.marca;
    }

    get getcategoria() {
        return this.categoria;
    }
}

export { ICarros, Carros }