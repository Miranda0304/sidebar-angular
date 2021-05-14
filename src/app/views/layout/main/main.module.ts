//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // ngClass
import { FormsModule } from '@angular/forms'; // ngModel
import { HttpClientModule } from '@angular/common/http';

//Dependencies
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTablesModule } from "angular-datatables";
import { PdfViewerModule } from 'ng2-pdf-viewer';

//Shared Components
import { MenuModule } from 'src/app/views/shared/menu/menu.module';
import { ContextualAreaModule } from 'src/app/views/shared/contextual_area/contextual-area.module';

//Services
import { GlobalService } from "src/app/services/Global/global.service";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { RackspaceService } from "src/app/services/Rackspace/rackspace.service";

//Components Views
import { MainComponent } from './main.component';
import { HomeComponent } from 'src/app/views/pages/main/home/home.component';
import { DocumentComponent } from 'src/app/views/pages/main/document/document.component';
import { TablesComponent } from 'src/app/views/shared/tables/tables.component';
import { FormsComponent } from 'src/app/views/shared/forms/forms.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MenuModule,
        ContextualAreaModule,
        Ng2SearchPipeModule,
        DataTablesModule,
        PdfViewerModule
    ],
    declarations: [
        MainComponent,
        HomeComponent,
        FormsComponent,
        TablesComponent,
        DocumentComponent,
    ],
    providers: [
        AuthenticationService,
        IxchelV2Service,
        GlobalService,
        RackspaceService
    ],
})
export class MainModule { }