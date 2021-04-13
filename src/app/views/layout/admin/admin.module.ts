//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Routes
import { AdminRoutingModule } from './admin-routing.module';

//Dependencies
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTablesModule } from "angular-datatables";
import { PdfViewerModule } from 'ng2-pdf-viewer';

//Shared Components
import { AdminComponent } from './admin.component';
import { MenuComponent } from '../../../views/shared/menu/menu.component';
import { ContextualAreaComponent } from '../../../views/shared/contextual_area/contextual-area.component';

//Services
import { ContextualAreaService } from "src/app/services/Contextual_area_visible/contextual-area.service";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";

//Components Views
import { HomeComponent } from '../../../views/pages/home/home.component';
import { ExpedientComponent } from '../../../views/pages/expedient/expedient.component';
import { UsersComponent } from '../../../views/pages/users/users.component';
import { AttachedComponent } from '../../../views/pages/attached/attached.component';
import { InformationComponent } from '../../../views/pages/information/information.component';
import { ExpedientAuxComponent } from '../../../views/pages/expedient-aux/expedient-aux.component';
import { UsersAuxComponent } from '../../../views/pages/users-aux/users-aux.component';
import { AttachedAuxComponent } from '../../../views/pages/attached-aux/attached-aux.component';
import { InformationAuxComponent } from '../../../views/pages/information-aux/information-aux.component';
import { Expedient1Component } from '../../../views/pages/expedient1/expedient1.component';
import { TablesComponent } from 'src/app/views/shared/tables/tables.component';
import { TableComponent } from '../../../views/pages/table/table.component';
import { Table2Component } from '../../../views/pages/table2/table2.component';




@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        Ng2SearchPipeModule,
        DataTablesModule,
        PdfViewerModule,
    ],
    declarations: [
        AdminComponent,
        MenuComponent,
        ContextualAreaComponent,
        HomeComponent,
        ExpedientComponent,
        UsersComponent,
        AttachedComponent,
        InformationComponent,
        ExpedientAuxComponent,
        UsersAuxComponent,
        AttachedAuxComponent,
        InformationAuxComponent,
        Expedient1Component,
        TablesComponent,
        TableComponent,
        Table2Component
    ],
    providers: [
        ContextualAreaService,
        IxchelV2Service
    ],
})
export class AdminModule { }