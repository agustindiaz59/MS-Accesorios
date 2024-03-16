import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesService } from '../../services/articles.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';
import { Router, RouterModule } from '@angular/router';
import { categorias } from '../../models/categorias';
import { Inject } from '@angular/core';
import { subscriptor } from '../../models/observer/subscriptor';
import { articulo } from '../../models/articulo.interface';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule,HttpClientModule,NgxPaginationModule, NgPipesModule, RouterModule],
  providers:[ArticlesService],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})

export class ArticlesComponent implements OnInit, subscriptor{
  //Variables de paginacion
  protected p = 1;
  protected tamPage : number = 12;
  //Variables del filtro
  protected categorias : string[] = categorias;
  protected orden : string = "nombre";

  
  public filtroKey : string[] = [];
  public filtroActivo : string[] = [];
  public articulos : articulo[] = [];

  constructor(@Inject(ArticlesService) protected articulosService : ArticlesService, protected router : Router){}
  
  update(filtroKey: string[], filtroActivo: string[], articulos: articulo[]): void {
    this.filtroKey = filtroKey;
    this.filtroActivo = filtroActivo;
    this.articulos = articulos;
  }
  
  ngOnInit(): void {
    this.articulosService.suscribe(this);
  };

  protected traerTodo(): void{
    this.articulosService.traerTodo();
    this.p = 1;
  };

  protected filtrarPorCategoria(value: string): void{
    this.articulosService.filtrarPorCategoria(value);
    this.p = 1;
  };

  protected filtrarPorPrecio(precioMin : number, precioMax : number): void{
    this.articulosService.filtrarPorPrecio(precioMin, precioMax);
    this.p = 1;
  }
  protected ordenarPor(campo: string){
    this.p = 1;
    this.orden = campo;
  }
};