import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolutionComponent } from 'src/app/views/pages/guess/solution/solution.component';
import { ResourceComponent } from 'src/app/views/pages/guess/resource/resource.component';
import { ContactComponent } from 'src/app/views/pages/guess/contact/contact.component';

//Views Component
import { GuessComponent } from './guess.component';



const routes: Routes = [
    {
        path: '',
        component: GuessComponent,
        children: [
            { path: 'solution', component: SolutionComponent },
            { path: 'resource', component: ResourceComponent },
            { path: 'contact', component: ContactComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'solution' }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GuessRoutingModule { }