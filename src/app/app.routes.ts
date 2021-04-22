import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./views/login/login.component";

//Guards
import { AuthGuard } from "src/app/guards/auth.guard";
import { AdminGuard } from './guards/admin.guard';
import { DoctorGuard } from './guards/doctor.guard';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'administrador', loadChildren: () => import('./views/layout/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard, AdminGuard] },
    { path: 'doctor', loadChildren: () => import('./views/layout/doctor/doctor.module').then(m => m.DoctorModule), canActivate: [AuthGuard, DoctorGuard] },
    { path: 'invitado', loadChildren: () => import('./views/layout/guess/guess.module').then(m => m.GuessModule) },
    { path: '**', pathMatch: 'full', redirectTo: 'administrador/home' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);