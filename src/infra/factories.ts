import { Carros_Controller } from "../controller/carros_Controller";
import { CarrosRepository } from "../repository/carros_repository";
import { CarrosUseCase } from "../use_cases/carros_usecase";


function criaRepositoryFactory() {
    const repo = new CarrosRepository();
    return repo;
}


function criaUseCaseFactory() {
    const repo = criaRepositoryFactory();
    const useCase = new CarrosUseCase(repo);
    return useCase;
}

function criaControllerFactory() {
    const usecase = criaUseCaseFactory();
    const controller = new Carros_Controller(usecase);
    return controller;
}

export { criaRepositoryFactory, criaUseCaseFactory , criaControllerFactory }