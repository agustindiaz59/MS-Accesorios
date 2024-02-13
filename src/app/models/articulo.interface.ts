export interface articulo{
    fotos : string[];
    nombre : string;
    //categoria : string[]; //Cambiar por Set<string> en el componente para permitir multiples categorias
    //coloresDisp
    categoria : string;
    precio : number;
    descripcion : string;
    porEncargue: boolean;
    stock: boolean;
}