import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Ticket} from "../../domain/ticket";
import {TicketService}from"../../services/ticket.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  providers: [TicketService]
})
export class TicketComponent implements OnInit {
  tickets:Ticket[];
  selectedTicket:Ticket;

  constructor(private ticketService:TicketService, private router:Router) { }

  ngOnInit() {
    this.getTickets();
  }

    private getTickets():void{
    //this.tickets = this.ticketService.getTickets();
    this.ticketService.getTickets().then(tickets=>this.tickets = tickets);
  }

  onSelect(ticket:Ticket):void{
    this.selectedTicket = ticket;
  }

  gotoDetail():void{
    this.router.navigate(['/tickets', this.selectedTicket.id]);
  }

}
