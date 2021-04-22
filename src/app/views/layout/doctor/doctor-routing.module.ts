import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Views Component
import { DoctorComponent } from './doctor.component';
import { HomeComponent } from "src/app/views/pages/doctor/home/home.component";



const routes: Routes = [
    {
        path: '',
        component: DoctorComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'home' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DoctorRoutingModule { }