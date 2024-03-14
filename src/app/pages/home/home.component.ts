import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavigatorComponent } from '../../components/navigator/navigator.component';
import { WarningComponent } from '../../components/warning/warning.component';
import { SearchResultsComponent } from '../../components/search-results/search-results.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavigatorComponent, 
    BannerComponent,
    ArticlesComponent,
    FooterComponent,
    WarningComponent,
    SearchResultsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
