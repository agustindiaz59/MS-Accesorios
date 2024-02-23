import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { Page404Component } from './pages/page404/page404.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EdicionComponent } from './pages/edicion/edicion.component';

export const routes: Routes = [
    {path: 'inicio', component: HomeComponent},
    {path: 'producto/:i', component: PreviewComponent},
    // ruta de contacto 
    {path: 'contacto', component: ContactComponent},
    // ruta 404 
    {path:'page404', component: Page404Component},
    {path: '', redirectTo: 'inicio',pathMatch:'full'},
    {path: 'edicion/6744', component: EdicionComponent, pathMatch:'full'},
    {path: '**', redirectTo:'page404'}
];
