import { Injectable } from '@angular/core';
import { articulo } from '../models/articulo.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private jsonUrl = 'assets/articulos.json'; // Ajusta la ruta según la ubicación de tu archivo JSON
  private datos : articulo[] = [];
  private cantPaginas : number[] = [];
  private tamPagina : number = 4;

  constructor( private http : HttpClient){
    this.getJson();
  }

  private getJson(){
    console.log("Comenzando a traer los datos del json")
    this.http.get<articulo[]>(this.jsonUrl).subscribe(
      data => {
        this.datos = data
        for (let i = 0; i < this.contarPaginas(this.datos, this.tamPagina); i++) {
          this.cantPaginas.push(i + 1);
        }
        console.log("Datos actualizados desde el json")
      }
    );
  }
  //Metodos publicos
  public getCantPaginas() : number[]{
    return this.cantPaginas;
  }

  public getAllProducts() : articulo[]{
    this.cantPaginas = []
    for (let i = 0; i < this.contarPaginas(this.datos, this.tamPagina); i++) {
      this.cantPaginas.push(i + 1);
    }
    return this.datos;
  }

  public getPagina(
    pagina : number,
    categoria? : string | undefined,
    precioMin? : number | undefined, 
    precioMax? : number | undefined
    ): articulo[]{

    console.log("Consultando productos");
    //Actualizar la lista completa
    let articulos : articulo[] = this.datos;
    console.log("Servicio: paso 1 completo")
    //Aplicar los filtros
    articulos = this.filtrar(articulos, categoria, precioMin, precioMax);
    console.log("Servicio: paso 2 completo")
    //Dividir en paginas
    articulos = this.paginar(articulos, this.tamPagina, pagina);
    console.log("Servicio: paso 3 completo")
    //Guardar cantidad de paginas
    this.cantPaginas = []
    for (let i = 0; i < this.contarPaginas(articulos, this.tamPagina); i++) {
      this.cantPaginas.push(i + 1);
    }
    console.log("Servicio: paso 4 completo")
    //Regresar la pagina solicitada
    return articulos;
  }


  //Metodos privados
  //Filtrar los articulos por categoria o por precio, ordena la lista
  private filtrar(
    articulos : articulo[] ,
    categoria? : string,
    precioMin? : number,
    precioMax? : number) : articulo[]{
      if(categoria !== undefined) {
        articulos = articulos.filter((art) => art.categoria === categoria);
      }
      else if(precioMin !== undefined && precioMax !== undefined){
        articulos = articulos.filter((art) => art.precio >= precioMin && art.precio <= precioMax);
        articulos.sort(
          (a: articulo, b: articulo) => { return a.precio - b.precio }
        );
      }
      return articulos;
  }
  //Devuelve una porcion del arreglo, segun la pagina deseada
  private paginar(articulos : articulo[] ,tamDePagina: number, numeroDePagina : number) : articulo[]{
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
  private contarPaginas(articulos : articulo[] ,tamDePagina: number) : number{
    if(articulos.length < tamDePagina) {
      console.log("contar paginas, tamaño de articulos",articulos.length, ", tamaño de pagina", tamDePagina)
      return 1
    }
    else{
      console.log("numero de paginas que se puede dividir: ",articulos.length,Math.round(articulos.length / tamDePagina))
      return Math.round(articulos.length / tamDePagina);
    }
  }
}
