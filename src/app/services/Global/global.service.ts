import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HomeComponent } from 'src/app/views/pages/main/home/home.component';
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

    public addRoutes(lst_routes) {
        lst_routes.map(x => x.replace(/^\/|\/$/g, '')).forEach(element => {
            this.routes[1].children.push(
                { path: element, component: HomeComponent },
            );
        });
        // this.routes[1].children.push(
        //     { path: '**', pathMatch: 'full', redirectTo: 'home' }
        // );

        // console.log(this.routes);
        this.router.resetConfig(this.routes);
    }

    // For title dynamic page.
    private titlePage = new Subject<string>();
    readTitlePage = this.titlePage.asObservable();

    public sendTitleDynamicPage(title_page: string) {
       return this.titlePage.next(title_page);   
    }

}
