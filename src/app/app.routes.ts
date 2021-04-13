import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./views/login/login.component";

//Guards
import { AuthGuard } from "src/app/guards/auth.guard";

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'admin', loadChildren: () => import('./views/layout/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'admin/home' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);