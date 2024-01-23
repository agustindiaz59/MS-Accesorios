import { Injectable } from '@angular/core';
import { articulo } from '../models/articulo.interface';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private jsonUrl = 'assets/articulos.json'; // Ajusta la ruta según la ubicación de tu archivo JSON
  private filtroKey : string[] = [];
  private filtroActivo : string[] = [];

  constructor(private http : HttpClient){};

  public getArticulos() : Observable<articulo[]>{
    console.log("Consultando http")
    return this.http.get<articulo[]>(this.jsonUrl)
  }

  public getFiltroKey(): string[]{
    return this.filtroKey;
  }

  public getFiltroActivo(): string[]{
    return this.filtroActivo;
  }
  
  public traerTodo(): void{
    this.filtroKey = []
    this.filtroKey.push("categoria");
    
    this.filtroActivo = [];
    this.filtroActivo.push("Pulceras")
    this.filtroActivo.push("Anillos")
    this.filtroActivo.push("Cadenas")
    this.filtroActivo.push("Gargantillas")
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