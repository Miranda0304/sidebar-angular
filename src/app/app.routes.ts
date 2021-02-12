import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ExpedientComponent } from './views/expedient/expedient.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'expedient', component: ExpedientComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);