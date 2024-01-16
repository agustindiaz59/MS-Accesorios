import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { articulo } from '../../models/articulo.interface';
import { ArticlesService } from '../../services/articles.service';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers:[ArticlesService, FiltersService],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})

export class ArticlesComponent {
  protected articulos : articulo[] = [];
  protected cantPaginas : number[] = [1];
  protected pagina : number = 1;

  constructor( protected articulosService : ArticlesService){
    //Primero los productos y despues as paginas
    this.articulos = articulosService.getPagina(1);
    this.cantPaginas = articulosService.getCantPaginas();
  }
  protected actualizarArticulos(
    pagina : number,
    categoria? : string | undefined,
    precioMin? : number | undefined, 
    precioMax? : number | undefined
    ){
    this.articulos = this.articulosService.getPagina(pagina, categoria, precioMin, precioMax);
    this.cantPaginas = this.articulosService.getCantPaginas();
  }

  protected actualizarTodo(){
    this.articulos = this.articulosService.getAllProducts();
    this.cantPaginas = this.articulosService.getCantPaginas();
  }

  protected actualizarPagina(){

  }
}
