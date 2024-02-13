import { articulo } from "../articulo.interface";

export interface articulosSubscriptor{
    update(articulos: articulo[]): void;
}