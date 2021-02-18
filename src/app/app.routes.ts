import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ExpedientComponent } from './views/expedient/expedient.component';
import { UsersComponent } from './views/users/users.component';
import { AttachedComponent } from './views/attached/attached.component'
import { InformationComponent } from './views/information/information.component'


const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'expedient', component: ExpedientComponent},
    {path: 'users', component: UsersComponent},
    {path: 'attached', component: AttachedComponent},
    {path: 'information', component: InformationComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);