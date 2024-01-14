import { Injectable } from '@angular/core';
import { articulo } from '../models/articulo.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private jsonUrl = 'assets/articulos.json'; // Ajusta la ruta según la ubicación de tu archivo JSON

  constructor( private http : HttpClient){}

  getProductos(): Observable<articulo[]>{
    console.log("Consultando productos");
    return this.http.get<articulo[]>(this.jsonUrl);
  }
  
  //Devuelve una porcion del arreglo, segun la pagina deseada
  paginar(articulos : articulo[] ,tamDePagina: number, numeroDePagina : number) : articulo[]{
    let inicio : number = tamDePagina * (numeroDePagina - 1);
    let fin : number = inicio + tamDePagina;

    if(numeroDePagina > this.contarPaginas(articulos, tamDePagina)) {
      console.log("Numero de pagina invalido");
      return [];
    }
    else{
      return articulos.slice(inicio, fin);
    }
  };

  //Cuenta la cantidad de paginas en las que se puede dividir el arreglo
  contarPaginas(articulos : articulo[] ,tamDePagina: number) : number{
    if(articulos.length < tamDePagina) {
      console.log("a",articulos.length, "  ", tamDePagina)
      return 1
    }
    else{
      console.log("b",Math.round(articulos.length / tamDePagina))
      return Math.round(articulos.length / tamDePagina);
    }
  }
}
