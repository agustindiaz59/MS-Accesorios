import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { articulo } from '../models/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'assets/articulos.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<articulo[]> {
    return this.http.get<articulo[]>(this.apiUrl);
  }

}
