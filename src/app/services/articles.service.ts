import { Injectable, OnInit } from '@angular/core';
import { articulo } from '../models/articulo.interface';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { categorias } from '../models/categorias';
import { subscriptor } from '../models/observer/subscriptor';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService{
  private jsonUrl = 'assets/articulos.json'; // Ajusta la ruta según la ubicación de tu archivo JSON
  //Variables del filtro
  private filtroKey : string[] = [];
  private filtroActivo : string[] = [];
  private articulos : articulo[] = [];
  private subscriptors : subscriptor[] = []

  constructor(private http : HttpClient){
    this.getArticulos().subscribe(
      data => {
        this.articulos = data
        data.forEach( 
          (a)=>{
            if(!categorias.includes(a.categoria)) categorias.push(a.categoria)
          })
        this.traerTodo()
        this.notifySubscriptors()
      }
    )
  }

  public getArticulos(): Observable<articulo[]>{
    console.log("Consultando articulos")
    return this.http.get<articulo[]>(this.jsonUrl)
  };

  public traerTodo(): void{
    this.filtroKey = []
    this.filtroKey.push('categoria')

    this.filtroActivo = []
    this.filtroActivo = categorias
    this.notifySubscriptors()
  };

  public filtrarPorCategoria(value: string): void{
    this.filtroKey = []
    this.filtroKey.push("categoria");

    this.filtroActivo = [];
    this.filtroActivo.push(value)
    this.notifySubscriptors()
  };

  public filtrarPorPrecio(precioMin : number, precioMax : number): void{
    this.filtroKey = []
    this.filtroKey.push("precio");

    this.filtroActivo = [];
    for (let i = precioMin; i < precioMax; i++) {
      this.filtroActivo.push(i.toString())
    }
    this.notifySubscriptors()
  };

  public buscar(buscado : string){
    console.log("Buscando elemento 2")

    let aux : articulo[] = []

    aux = this.articulos.filter(
      (a)=>{
        a.nombre === buscado || a.categoria === buscado
      }
    )

    this.articulos = aux
    this.notifySubscriptors()
  };

  // Metodos del patron observer
  public suscribe(subscriptor : subscriptor){
    this.subscriptors.push(subscriptor)
    this.notifySubscriptors()
  }

  private notifySubscriptors(){
    this.subscriptors.forEach( (a)=> a.update(this.filtroKey, this.filtroActivo, this.articulos) )
  }
  /*

  */
}