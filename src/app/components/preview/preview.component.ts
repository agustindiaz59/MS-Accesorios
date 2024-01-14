import { Component } from '@angular/core';
import { NavigatorComponent } from '../navigator/navigator.component';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [NavigatorComponent],
  providers:[ArticlesService],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {

}
