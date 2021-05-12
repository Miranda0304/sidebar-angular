import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HomeComponent } from 'src/app/views/pages/admin/home/home.component';
import { APP_ROUTES } from "src/app/app.routes";
import { Router } from '@angular/router';
@Injectable()
export class GlobalService {
    routes = APP_ROUTES;

    constructor(private router: Router) { }

    // For contextual area.
    private isVisibleContextualArea = new Subject<boolean>();
    readStatusContextualArea = this.isVisibleContextualArea.asObservable();

    public sendEstatusContextualArea(visible: boolean) {
        this.isVisibleContextualArea.next(visible);
    }


    addRoutes(lst) {
        lst.map(x => x.path.replace(/^\/|\/$/g, '')).forEach(element => {
            this.routes[1].children.push(
                { path: element, component: HomeComponent },
            );
        });
        this.routes[1].children.push(
            { path: '**', pathMatch: 'full', redirectTo: 'home' }
        );

        console.log(this.routes);
        this.router.resetConfig(this.routes);
    }

}
