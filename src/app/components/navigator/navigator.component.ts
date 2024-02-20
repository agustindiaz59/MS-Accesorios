import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RouterModule],
  providers:[ArticlesService],
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css'
})
export class NavigatorComponent {
  constructor(protected router : Router, protected articleService : ArticlesService){}
}