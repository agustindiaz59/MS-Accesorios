import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { articulo } from '../../models/articulo.interface';
import { ArticlesService } from '../../services/articles.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule,HttpClientModule,NgxPaginationModule, NgPipesModule],
  providers:[ArticlesService],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})

export class ArticlesComponent implements OnInit{
  //Variables de paginacion
  protected p = 1;
  protected tamPage : number = 12;
  protected articulos : articulo[] = [];
  //Variables del filtro
  protected filtroKey : string[] = [];
  protected filtroActivo : string[] = [];

  constructor(protected articulosService : ArticlesService){}
  
  ngOnInit(): void {
    this.articulosService.getArticulos().subscribe(
      data => {
        this.articulos = data
        this.traerTodo()
      }
    )
  }
;

  protected traerTodo(): void{
    this.articulosService.traerTodo();
    this.filtroKey = this.articulosService.getFiltroKey();
    this.filtroActivo = this.articulosService.getFiltroActivo();
  };

  protected filtrarPorCategoria(value: string): void{
    this.articulosService.filtrarPorCategoria(value);
    this.filtroKey = this.articulosService.getFiltroKey();
    this.filtroActivo = this.articulosService.getFiltroActivo();
  };

  protected filtrarPorPrecio(precioMin : number, precioMax : number): void{
    this.articulosService.filtrarPorPrecio(precioMin, precioMax);
    this.filtroKey = this.articulosService.getFiltroKey();
    this.filtroActivo = this.articulosService.getFiltroActivo();
  }
};