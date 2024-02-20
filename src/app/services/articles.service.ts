import { Injectable, OnInit } from '@angular/core';
import { articulo } from '../models/articulo.interface';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { categorias } from '../models/categorias';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService{
  private jsonUrl = 'assets/articulos.json'; // Ajusta la ruta según la ubicación de tu archivo JSON
  //Variables del filtro
  public filtroKey : string[] = [];
  public filtroActivo : string[] = [];
  public articulos : articulo[] = [];

  constructor(private http : HttpClient){
    this.getArticulos().subscribe(
      data => {
        this.articulos = data
        data.forEach( 
          (a)=>{
            if(!categorias.includes(a.categoria)) categorias.push(a.categoria)
          })
        this.traerTodo()
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
  };

  public filtrarPorCategoria(value: string): void{
    this.filtroKey = []
    this.filtroKey.push("categoria");

    this.filtroActivo = [];
    this.filtroActivo.push(value)
  };

  public filtrarPorPrecio(precioMin : number, precioMax : number): void{
    this.filtroKey = []
    this.filtroKey.push("precio");

    this.filtroActivo = [];
    for (let i = precioMin; i < precioMax; i++) {
      this.filtroActivo.push(i.toString())
    }
  };
}