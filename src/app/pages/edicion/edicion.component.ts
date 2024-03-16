import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NavigatorComponent } from '../../components/navigator/navigator.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ArticlesService } from '../../services/articles.service';
import { articulo } from '../../models/articulo.interface';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { Router, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';
import { FormsModule } from '@angular/forms';
import { subscriptor } from '../../models/observer/subscriptor';

@Component({
  selector: 'app-edicion',
  standalone: true,
  imports: [CommonModule,FormsModule,NavigatorComponent,FooterComponent, RouterModule,NgxPaginationModule, NgPipesModule],
  providers:[ArticlesService],
  templateUrl: './edicion.component.html',
  styleUrl: './edicion.component.css'
})
export class EdicionComponent extends ArticlesComponent{
  protected articulosEditados : articulo[] = [];

  constructor(protected articlesService : ArticlesService, router : Router){
    super(articlesService,router)
    this.articulosService.getArticulos().subscribe(
      (art) => {
        this.articulosEditados = art;
      }
    )
  }

  protected guardarCambios(){
    const content = JSON.stringify(this.articulosEditados, null, 2);
    const blob = new Blob([content], {type: 'text/plain'})
    const fileName = 'articulosEditados.json'

    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.href = url
    link.download = fileName
    link.click()
    URL.revokeObjectURL(url)
  }
  protected ss(){
    if(document.getElementsByName('nnn')[0].hasAttribute("checked")){
      console.log("ssssssssssssssssssssssssssss")
    }
  }
}
