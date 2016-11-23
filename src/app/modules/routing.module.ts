import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from '../components/dashboard/dashboard.component';
import { TicketComponent }      from '../components/ticket/ticket.component';
import { TicketDetailComponent }  from '../components/ticket-detail/ticket-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'tickets/:id', component: TicketDetailComponent },
  { path: 'tickets',     component: TicketComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

