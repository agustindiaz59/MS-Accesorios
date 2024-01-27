import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { BannerComponent } from './components/banner/banner.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavigatorComponent, 
    BannerComponent,
    ArticlesComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MS-Accesorios';
}
