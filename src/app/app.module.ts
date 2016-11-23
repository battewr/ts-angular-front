import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from"@angular/router";

import { AppComponent } from './app.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {AppRoutingModule} from "./modules/routing.module";

@NgModule({
  declarations: [
    AppComponent,
    TicketDetailComponent,
    TicketComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
