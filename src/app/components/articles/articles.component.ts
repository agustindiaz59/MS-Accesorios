import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesService } from '../../services/articles.service';
import { articulo } from '../../models/articulo.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers:[ArticlesService],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})

export class ArticlesComponent {
  protected articulos : articulo[] = [];
  protected paginas : number[] = [];
  protected paginaActual : number = 1;

  constructor(protected articuloService : ArticlesService){
    setTimeout(()=>{
      this.articulos = this.articuloService.actualizarArticulos();
      this.paginas = this.articuloService.getPaginas();
      console.log("constructor de component",this.articulos)
    },500);

  }

  actualizarArticulos(): void {
    this.paginas = this.articuloService.getPaginas();
    this.articulos = this.articuloService.actualizarArticulos();
    console.log("aArt de component",this.articulos)

  }

  filtrar(categoria? : string | undefined, precioMin? : number, precioMax? : number) : void{
    this.paginas = this.articuloService.getPaginas();
    this.articuloService.filtrar(categoria, precioMin, precioMax);
    this.articulos = this.articuloService.getArticulos();
  }
  
  actualizarpagina(pagina : number){
    console.log("apag de component",this.articulos)

    this.paginas = this.articuloService.getPaginas();
    this.articuloService.actualizarpagina(pagina);
    this.articulos = this.articuloService.getArticulos();
    
  }
}
