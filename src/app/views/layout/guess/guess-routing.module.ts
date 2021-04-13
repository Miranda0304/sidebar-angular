import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';

//Views Component
import { GuessComponent } from './guess.component';



const routes: Routes = [
    {
        path: '',
        component: GuessComponent,
        children: [
            { path: 'home', component: HomeComponent }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuessRoutingModule { }