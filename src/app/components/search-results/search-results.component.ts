import { Component, Inject, Input, OnInit } from '@angular/core';
import { articulo } from '../../models/articulo.interface';
import { ArticlesService } from '../../services/articles.service';
import { CommonModule } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { subscriptor } from '../../models/observer/subscriptor';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, NgPipesModule, RouterModule, FormsModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements subscriptor,OnInit{
  @Input()
  public buscado : string = "";
  public filtroKey : string[] = [];
  public filtroActivo : string[] = [];
  public articulos : articulo[] = [];


  constructor(protected articleService : ArticlesService, protected router :Router){}

  ngOnInit(): void {
    this.articleService.suscribe(this);
  }

  update(filtroKey: string[], filtroActivo: string[], articulos: articulo[]): void {
    this.filtroKey = filtroKey;
    this.filtroActivo = filtroActivo;
    this.articulos = articulos;
  }
}
