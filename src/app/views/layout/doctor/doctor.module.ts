//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//Routes
import { DoctorRoutingModule } from './doctor-routing.module';

//Dependencies


//Shared Components
import { DoctorComponent } from './doctor.component';
import { MenuModule } from '../../../views/shared/menu/menu.module';
import { ContextualAreaModule } from '../../../views/shared/contextual_area/contextual-area.module';


//Services
import { ContextualAreaService } from "src/app/services/Contextual_area_visible/contextual-area.service";


//Components Views


@NgModule({
    imports: [
        CommonModule,
        MenuModule,
        ContextualAreaModule,
        DoctorRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        
    ],
    declarations: [
        DoctorComponent,
    ],
    providers: [
        ContextualAreaService,
    ],
})
export class DoctorModule { }