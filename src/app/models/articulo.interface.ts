export interface articulo{
    pathFoto : string;
    nombre : string;
    //categoria : string[]; //Cambiar por Set<string> en el componente para permitir multiples categorias
    //coloresDisp : string[]; //Agregar atributo para mostrar los colores disponibles
    categoria : string;
    precio : number;
    descripcion : string;
    stock: boolean;
}