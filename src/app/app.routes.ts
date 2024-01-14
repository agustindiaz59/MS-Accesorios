import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'inicio', component: HomeComponent},
    {path: '**', redirectTo: 'inicio'}
];
