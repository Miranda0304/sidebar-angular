import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./views/login/login.component";
import { MainComponent } from "src/app/views/layout/main/main.component";
//Guards
import { AuthGuard } from "src/app/guards/auth.guard";
import { HomeComponent } from 'src/app/views/pages/main/home/home.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main', component: MainComponent,
    children: [{ path: 'home', component: HomeComponent }],
    canActivate: [AuthGuard],
  },
  { path: 'invitado', loadChildren: () => import('./views/layout/guess/guess.module').then(m => m.GuessModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);