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
import { MenuModule } from '../../../views/shared/menu/menu.module';
import { ContextualAreaModule } from '../../../views/shared/contextual_area/contextual-area.module';

//Services
import { GlobalService } from "src/app/services/Global/global.service";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { RackspaceService } from "src/app/services/Rackspace/rackspace.service";

//Components Views
import { HomeComponent } from '../../../views/pages/admin/home/home.component';
import { DocumentComponent } from '../../pages/admin/document/document.component';
import { ContactComponent } from '../../pages/admin/contact/contact.component';
import { TablesComponent } from 'src/app/views/shared/tables/tables.component';
import { FormsComponent } from 'src/app/views/shared/forms/forms.component';
import { TableComponent } from '../../../views/pages/admin/table/table.component';
import { Table2Component } from '../../../views/pages/admin/table2/table2.component';


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
        MenuModule,
        ContextualAreaModule
    ],
    declarations: [
        AdminComponent,
        HomeComponent,
        DocumentComponent,
        ContactComponent,
        FormsComponent,
        TablesComponent,
        TableComponent,
        Table2Component
    ],
    providers: [
        GlobalService,
        IxchelV2Service,
        RackspaceService,
        AuthenticationService
    ],
})
export class AdminModule { }