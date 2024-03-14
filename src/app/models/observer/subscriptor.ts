import { articulo } from "../articulo.interface";

export interface subscriptor{
    update(
        filtroKey : string[],
        filtroActivo : string[],
        articulos : articulo[]
    ):void;
}