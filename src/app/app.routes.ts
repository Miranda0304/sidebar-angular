import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./views/login/login.component";
import { MainComponent } from "src/app/views/layout/main/main.component";
//Guards
import { AuthGuard } from "src/app/guards/auth.guard";
import { HomeComponent } from 'src/app/views/pages/admin/home/home.component';
import { ContactComponent } from 'src/app/views/pages/admin/contact/contact.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contacts', component: ContactComponent },
      // { path: '**', pathMatch: 'full', redirectTo: 'home' }
    ], canActivate: [AuthGuard],
  },
  { path: 'administrador', loadChildren: () => import('./views/layout/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
  { path: 'invitado', loadChildren: () => import('./views/layout/guess/guess.module').then(m => m.GuessModule) },
  { path: '**', pathMatch: 'full', redirectTo: 'main/home' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);