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
  protected paginas : number[] = [];
  protected paginaActual : number = 1;

  constructor( private articulosService : ArticlesService, protected filtros : FiltersService){
    this.actualizarArticulos();
  }
  //Actualizar los articulos segun la pagina, metodo asincrono
  protected actualizarArticulos():void{
    this.articulosService.getProductos().subscribe(
      (data)=>{ 
        this.articulos = this.articulosService.paginar(data, 4, this.paginaActual); //Toma solo los primeros 16 resultados
        this.separarPaginas(data);
      });
  }
  //Actualizar la pagina por los numeros de paginacion
  protected actualizarpagina(pagina : number):void{
    this.paginaActual = pagina;
    this.actualizarArticulos();
  }
  //Filtrar los articulos por categoria o por precio, ordena la lista
  protected filtrar(categoria? : string, precioMin? : number, precioMax? : number) : void{
    this.articulosService.getProductos().subscribe(
      (data) => {
        this.paginas = []
        if(categoria !== undefined) this.articulos = data.filter((art) => art.categoria === categoria);
        else if(precioMin !== undefined && precioMax !== undefined){
          this.articulos = data.filter((art) => art.precio >= precioMin && art.precio <= precioMax);
          this.articulos.sort(
            (a: articulo, b: articulo) => { return a.precio - b.precio }
          );
        }
      }
    )

  }
  //Separa el array en paginas de 4
  private separarPaginas(data :articulo[]){
    this.paginas = [];
        for(let i = 0; i < this.articulosService.contarPaginas(data, 4); i++){
          this.paginas.push( i + 1 ); 
        }
  }
  
}
