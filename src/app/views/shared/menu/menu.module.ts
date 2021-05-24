//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

//Dependencies
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Shared Components
import { MenuComponent } from './menu.component';

//Services
import { GlobalService } from "src/app/services/Global/global.service";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";


//Components Views

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        Ng2SearchPipeModule,
        RouterModule
    ],
    declarations: [
        MenuComponent,
    ],
    exports: [
        MenuComponent,
        RouterModule
    ],
    providers: [
        GlobalService,
        IxchelV2Service
    ],
})
export class MenuModule { }