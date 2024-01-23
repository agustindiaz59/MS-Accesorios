import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { articulo } from '../../models/articulo.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css'
})
export class NavigatorComponent {
  
}