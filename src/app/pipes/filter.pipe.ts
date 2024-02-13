import { Pipe, PipeTransform } from '@angular/core';
import { articulo } from '../models/articulo.interface';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(articulos : articulo[], campo: string, searchTerm: any): articulo[] {

    switch(campo){
      case "categoria":
        return articulos.filter(
          (a)=>{
            a.categoria == searchTerm;
          }
        )
      case "precio":
        return articulos.filter(
          (a) =>{
            a.categoria == searchTerm;
          }
        )
      default:
        return []
    }
  }

}
