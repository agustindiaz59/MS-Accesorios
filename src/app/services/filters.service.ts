import { Injectable } from '@angular/core';
import { articulo } from '../models/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor() { }

  public filtrarArticuloCategoria(articulos : articulo[] ,categoria : string) : articulo[]{
    let nuevo : articulo[] = [];

    articulos.forEach((articulo)=>{
      if(articulo.categoria == categoria) nuevo.push(articulo);
    });

    return nuevo;
  }

  public filtrarArticuloPrecio(articulos : articulo[], data : articulo[], categoria? : string, precioMin? : number, precioMax? : number) : articulo[]{

    if(categoria !== undefined) articulos = data.filter((art) => art.categoria === categoria);
    else if(precioMin !== undefined && precioMax !== undefined){articulos = data.filter((art) => art.precio >= precioMin && art.precio <= precioMax)}
  
    return articulos;
  }
}
