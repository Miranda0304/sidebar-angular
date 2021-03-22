//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Routes
import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

//Dependecies
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTablesModule } from "angular-datatables";

//Views
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component'
import { ExpedientComponent } from './views/expedient/expedient.component';
import { ContextualAreaComponent } from './shared/contextual_area/contextual-area.component';
import { UsersComponent } from './views/users/users.component';
import { AttachedComponent } from './views/attached/attached.component';
import { InformationComponent } from './views/information/information.component';
import { ExpedientAuxComponent } from './views/expedient-aux/expedient-aux.component';
import { UsersAuxComponent } from './views/users-aux/users-aux.component';
import { AttachedAuxComponent } from './views/attached-aux/attached-aux.component';
import { InformationAuxComponent } from './views/information-aux/information-aux.component';
import { Expedient1Component } from './views/expedient1/expedient1.component';
import { MenuComponent } from './shared/menu/menu.component';
import { TableComponent } from './views/table/table.component';
import { Table2Component } from './views/table2/table2.component';


//Services
import { ContextualAreaService } from "./services/contextual_area_visible/contextual-area.service";
import { ObjectsService } from "./services/objects_methods/objects.service";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";

@NgModule({
  declarations: [
    AppComponent,
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
   
    TableComponent,
    Table2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    CommonModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [
    ContextualAreaService,
    ObjectsService,
    IxchelV2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
