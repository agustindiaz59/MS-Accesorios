import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RouterModule, SearchResultsComponent,FormsModule],
  providers:[ArticlesService],
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css'
})
export class NavigatorComponent {
  protected busqueda :string = "";

  constructor(protected router : Router, protected articleService : ArticlesService){}

}