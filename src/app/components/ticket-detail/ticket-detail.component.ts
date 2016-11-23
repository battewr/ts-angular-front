import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params}from'@angular/router';
import {Location}from'@angular/common';
import 'rxjs/add/operator/switchMap';

import {Ticket} from "../../domain/ticket";
import {TicketService}from'../../services/ticket.service';
@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
  providers: [TicketService]
})
export class TicketDetailComponent implements OnInit {
  ticket:Ticket;

  constructor(private ticketService:TicketService, private route: ActivatedRoute, private location:Location) { }

  ngOnInit() {
    this.route.params.switchMap((params:Params)=>this.ticketService.getTicket(params['id']))
    .subscribe(ticket => this.ticket = ticket);
  }

  goBack():void{
    this.location.back();
  }

}
