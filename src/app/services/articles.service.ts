import { Injectable, OnInit } from '@angular/core';
import { articulo } from '../models/articulo.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService implements OnInit{
  private jsonUrl = 'assets/articulos.json'; // Ajusta la ruta según la ubicación de tu archivo JSON
  private datos : articulo[] = []; //Constante para realizar solicitud una sola vez
  protected articulos : articulo[] = [];
  protected paginas : number[] = [];
  protected paginaActual : number = 1;

  constructor(private http: HttpClient, private rout : Router) {
    this.traerDatos();
    this.paginar(this.articulos, 4, this.paginaActual);
  }
  ngOnInit(): void {
  }
  //1 - Traer datos desde el json y guardarlos en datos
  private traerDatos(): void {
    this.http.get<articulo[]>(this.jsonUrl).subscribe(
      art => {
        this.datos = art;
        this.articulos = this.datos;
        this.rout.navigate(['/inicio'])
      });
  }
  //2.1 - Establecer las paginas
  private paginar(articulos : articulo[] ,tamDePagina: number, numeroDePagina : number) : articulo[]{
    let inicio : number = tamDePagina * (numeroDePagina - 1);
    let fin : number = inicio + tamDePagina;
    
    for(let i = 0; i < this.contarPaginas(articulos, 4); i++){
      this.paginas.push( i + 1 ); 
    }

    if(numeroDePagina > this.contarPaginas(articulos, tamDePagina)) {
      console.log("Numero de pagina invalido");
      return [];
    }
    else{
      return articulos.slice(inicio, fin);
    }
  }
  //2.2 - Cuenta la cantidad de paginas en las que se puede dividir el arreglo
  private contarPaginas(articulos : articulo[] ,tamDePagina: number) : number{
    if(articulos.length < tamDePagina) {
      return 1
    }
    else{
      return Math.round(articulos.length / tamDePagina);
    }
  }
  //Utilidades
  //4 - Filtrar los articulos por categoria o por precio, ordena la lista
  public filtrar(categoria? : string | undefined, precioMin? : number, precioMax? : number) : void{
    this.getProductos();
      if(categoria !== undefined) 
        this.articulos = this.articulos.filter((art) => art.categoria === categoria);

      else if(precioMin !== undefined && precioMax !== undefined){
        this.articulos = this.articulos.filter((art) => art.precio >= precioMin && art.precio <= precioMax);
        this.articulos.sort((a: articulo, b: articulo) => a.precio - b.precio ); //Editado
      }
  }
  //5 - actualizar los articulos
  public actualizarArticulos(): articulo[]{
    this.getProductos();
    this.paginas = [];
    this.articulos = this.paginar(this.articulos, 4, this.paginaActual);//Toma solo los primeros 16 resultados
    return this.articulos;
  }  
  //Actualizar la pagina por los numeros de paginacion
  public actualizarpagina(pagina : number): void{
    this.paginaActual = pagina;
    this.actualizarArticulos();
  }

  
  //Actualizar los articulos segun la pagina, metodo asincrono
  



  
  //Devuelve una porcion del arreglo, segun la pagina deseada
  




  //Getters
  private getProductos():void{
    this.articulos = this.datos;
  }
  public getArticulos(): articulo[]{
    return this.articulos;
  }
  public getPaginas() : number[]{
    return this.paginas;
  }
  public getPaginaActual() : number{
    return this.paginaActual;
  }
}
