//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Routes
import { APP_ROUTING } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

//Dependecies
import { ToastModule } from 'ng-uikit-pro-standard';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DataTablesModule } from "angular-datatables";
import { PdfViewerModule } from 'ng2-pdf-viewer';

//Shared Components
import { MainComponent } from 'src/app/views/layout/main/main.component';
import { MenuModule } from 'src/app/views/shared/menu/menu.module';
import { ContextualAreaModule } from 'src/app/views/shared/contextual_area/contextual-area.module';


//Services
import { GlobalService } from "src/app/services/Global/global.service";
import { IxchelV2Service } from "src/app/services/API_Ixchelv2/ixchel_v2.service";
import { AuthenticationService } from "src/app/services/Authentication/authentication.service";
import { RackspaceService } from "src/app/services/Rackspace/rackspace.service";

//Components Views
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SolutionComponent } from './views/pages/guess/solution/solution.component';
import { ResourceComponent } from './views/pages/guess/resource/resource.component';
import { ContactComponent } from './views/pages/guess/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SolutionComponent,
    ResourceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    MenuModule,
    ContextualAreaModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    Ng2SearchPipeModule,
    DataTablesModule,
    PdfViewerModule
  ],
  providers: [
    IxchelV2Service,
    GlobalService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
