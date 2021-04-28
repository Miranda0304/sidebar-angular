import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Views Component
import { AdminComponent } from './admin.component';
import { ContactComponent } from '../../pages/admin/contact/contact.component';
import { HomeComponent } from '../../pages/admin/home/home.component';
import { DocumentComponent } from '../../pages/admin/document/document.component';
import { TableComponent } from '../../pages/admin/table/table.component';
import { Table2Component } from '../../pages/admin/table2/table2.component';



const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'home', component: HomeComponent },

            { path: 'contacts', component: ContactComponent },

            { path: 'appt', component: TableComponent },

            { path: 'pos', component: Table2Component },

            { path: 'dms', component: DocumentComponent },


            { path: '**', pathMatch: 'full', redirectTo: 'home' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }