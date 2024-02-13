import { Component, OnInit } from '@angular/core';
import { NavigatorComponent } from '../../components/navigator/navigator.component';
import { articulo } from '../../models/articulo.interface';
import { ArticlesService } from '../../services/articles.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule,NavigatorComponent, HttpClientModule, FooterComponent],
  providers:[ArticlesService],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent implements OnInit{
  protected articulo : articulo | undefined;

  constructor(private aService: ArticlesService, private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        this.aService.getArticulos().subscribe(
          (data: articulo[]) => {
            this.articulo = data[Number(params['i'])]
          }
        )
      }
    )
  }
}
