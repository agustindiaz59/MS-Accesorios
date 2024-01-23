import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreviewComponent } from './components/preview/preview.component';
import { CargandoComponent } from './components/cargando/cargando.component';

export const routes: Routes = [
    {path: 'inicio', component: HomeComponent},
    {path: 'cargando', component: CargandoComponent},
    {path: 'producto/:nombre', component: PreviewComponent},
    {path: '**', redirectTo: 'inicio', pathMatch:'full'}
];
