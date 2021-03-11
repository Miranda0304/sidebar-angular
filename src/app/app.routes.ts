import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ExpedientComponent } from './views/expedient/expedient.component';
import { UsersComponent } from './views/users/users.component';
import { AttachedComponent } from './views/attached/attached.component'
import { InformationComponent } from './views/information/information.component'
import { ExpedientAuxComponent } from './views/expedient-aux/expedient-aux.component';
import { UsersAuxComponent } from './views/users-aux/users-aux.component';
import { AttachedAuxComponent } from './views/attached-aux/attached-aux.component';
import { InformationAuxComponent } from './views/information-aux/information-aux.component';
import { Expedient1Component } from './views/expedient1/expedient1.component';
import { TableComponent } from './views/table/table.component';


const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},

    {path: 'expedient', component: Expedient1Component},
    {path: 'expedient1', component: ExpedientComponent},
    {path: 'expedient2', component: ExpedientComponent},
    {path: 'expedient3', component: ExpedientAuxComponent},
    {path: 'expedient4', component: ExpedientComponent},
    {path: 'expedient5', component: ExpedientAuxComponent},
    {path: 'expedient6', component: ExpedientComponent},
    {path: 'expedient7', component: ExpedientAuxComponent},
    {path: 'expedient8', component: ExpedientComponent},
    {path: 'expedient9', component: ExpedientAuxComponent},
    {path: 'expedient10', component: ExpedientComponent},
    {path: 'expedient11', component: ExpedientAuxComponent},
    {path: 'expedient12', component: ExpedientComponent},
    {path: 'expedient13', component: ExpedientAuxComponent},
    
    {path: 'users', component: TableComponent},
    {path: 'users1', component: UsersAuxComponent},
    {path: 'users2', component: UsersComponent},
    {path: 'users3', component: UsersAuxComponent},
    {path: 'users4', component: UsersComponent},
    {path: 'users5', component: UsersAuxComponent},
    {path: 'users6', component: UsersComponent},
    {path: 'users7', component: UsersAuxComponent},
    {path: 'users8', component: UsersComponent},

    {path: 'attached', component: AttachedComponent},
    {path: 'attached1', component: AttachedAuxComponent},
    {path: 'attached2', component: AttachedComponent},
    {path: 'attached3', component: AttachedAuxComponent},
    {path: 'attached4', component: AttachedComponent},

    {path: 'information', component: InformationComponent},
    {path: 'information1', component: InformationAuxComponent},
    {path: 'information2', component: InformationComponent},
    {path: 'information3', component: InformationAuxComponent},
    {path: 'information4', component: InformationComponent},
    {path: 'information5', component: InformationAuxComponent},

    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);