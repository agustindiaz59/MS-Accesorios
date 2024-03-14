import { Component, Inject, Input } from '@angular/core';
import { articulo } from '../../models/articulo.interface';
import { ArticlesService } from '../../services/articles.service';
import { CommonModule } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, NgPipesModule, RouterModule, FormsModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  @Input()
  public buscado : string = "";

  constructor(protected articleService : ArticlesService, protected router :Router){}
}
