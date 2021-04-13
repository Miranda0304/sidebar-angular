//Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Routes
import { GuessRoutingModule } from './guess-routing.module';

//Dependencies


//Shared Components
import { GuessComponent } from './guess.component';

//Services
import { ContextualAreaService } from "src/app/services/Contextual_area_visible/contextual-area.service";


//Components Views


@NgModule({
    imports: [
        CommonModule,
        GuessRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        GuessComponent,
    ],
    providers: [
        ContextualAreaService,
    ],
})
export class GuessModule { }