import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargando',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './cargando.component.html',
  styleUrl: './cargando.component.css'
})
export class CargandoComponent {
  private jsonUrl = 'assets/articulos.json'; // Ajusta la ruta según la ubicación de tu archivo JSON

  constructor(private http : HttpClient, private artService : ArticlesService, private router : Router){
    router.navigate(['inicio'])
  }
}
