import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PreviewComponent } from './pages/preview/preview.component';

export const routes: Routes = [
    {path: 'inicio', component: HomeComponent},
    {path: 'producto/:i', component: PreviewComponent},
    // ruta de contacto 
    {path: 'contacto', component: HomeComponent},
    // ruta 404 
    //{path:'page404', component: 'Page404Component'},
    //{path: '**', redirectTo:'page404'},
    {path: '', redirectTo: 'inicio',pathMatch:'full'}
];
