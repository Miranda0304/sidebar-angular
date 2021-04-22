//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

//Dependencies
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTablesModule } from "angular-datatables";
import { PdfViewerModule } from 'ng2-pdf-viewer';

//Shared Components
import { ContextualAreaComponent } from './contextual-area.component';

//Services
import { ContextualAreaService } from "src/app/services/Contextual_area_visible/contextual-area.service";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";


//Components Views

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        Ng2SearchPipeModule,
        DataTablesModule,
        PdfViewerModule,
        RouterModule
    ],
    declarations: [
        ContextualAreaComponent,
    ],
    exports: [
        ContextualAreaComponent,
        RouterModule
    ],
    providers: [
        ContextualAreaService,
        IxchelV2Service
    ],
})
export class ContextualAreaModule { }