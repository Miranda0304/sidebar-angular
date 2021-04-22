import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Views Component
import { AdminComponent } from './admin.component';
import { AttachedAuxComponent } from '../../pages/admin/attached-aux/attached-aux.component';
import { AttachedComponent } from '../../pages/admin/attached/attached.component';
import { ExpedientAuxComponent } from '../../pages/admin/expedient-aux/expedient-aux.component';
import { ExpedientComponent } from '../../pages/admin/expedient/expedient.component';
import { Expedient1Component } from '../../pages/admin/expedient1/expedient1.component';
import { HomeComponent } from '../../pages/admin/home/home.component';
import { InformationAuxComponent } from '../../pages/admin/information-aux/information-aux.component';
import { InformationComponent } from '../../pages/admin/information/information.component';
import { TableComponent } from '../../pages/admin/table/table.component';
import { Table2Component } from '../../pages/admin/table2/table2.component';
import { UsersAuxComponent } from '../../pages/admin/users-aux/users-aux.component';
import { UsersComponent } from '../../pages/admin/users/users.component';


const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'contacts', component: Expedient1Component },
            { path: 'expedient1', component: ExpedientComponent },
            { path: 'expedient2', component: ExpedientComponent },
            { path: 'expedient3', component: ExpedientAuxComponent },
            { path: 'expedient4', component: ExpedientComponent },
            { path: 'expedient5', component: ExpedientAuxComponent },
            { path: 'expedient6', component: ExpedientComponent },
            { path: 'expedient7', component: ExpedientAuxComponent },
            { path: 'expedient8', component: ExpedientComponent },
            { path: 'expedient9', component: ExpedientAuxComponent },
            { path: 'expedient10', component: ExpedientComponent },
            { path: 'expedient11', component: ExpedientAuxComponent },
            { path: 'expedient12', component: ExpedientComponent },
            { path: 'expedient13', component: ExpedientAuxComponent },

            { path: 'appt', component: TableComponent },
            { path: 'users1', component: UsersAuxComponent },
            { path: 'users2', component: UsersComponent },
            { path: 'users3', component: UsersAuxComponent },
            { path: 'users4', component: UsersComponent },
            { path: 'users5', component: UsersAuxComponent },
            { path: 'users6', component: UsersComponent },
            { path: 'users7', component: UsersAuxComponent },
            { path: 'users8', component: UsersComponent },

            { path: 'pos', component: Table2Component },
            { path: 'attached1', component: AttachedAuxComponent },
            { path: 'attached2', component: AttachedComponent },
            { path: 'attached3', component: AttachedAuxComponent },
            { path: 'attached4', component: AttachedComponent },

            { path: 'epm', component: InformationComponent },
            { path: 'information1', component: InformationAuxComponent },
            { path: 'information2', component: InformationComponent },
            { path: 'information3', component: InformationAuxComponent },
            { path: 'information4', component: InformationComponent },
            { path: 'information5', component: InformationAuxComponent },

            { path: '**', pathMatch: 'full', redirectTo: 'home' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }