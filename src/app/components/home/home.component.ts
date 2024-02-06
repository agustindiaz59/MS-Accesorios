import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesComponent } from '../articles/articles.component';
import { BannerComponent } from '../banner/banner.component';
import { FooterComponent } from '../footer/footer.component';
import { NavigatorComponent } from '../navigator/navigator.component';
import { WarningComponent } from '../warning/warning.component';

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
    WarningComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
