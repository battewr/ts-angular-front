import { Component, OnInit } from '@angular/core';
import {Location}from'@angular/common';

import {TicketService} from '../../services/ticket.service'
import {Ticket} from '../../domain/ticket';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css'],
  providers: [TicketService]
})
export class AddTicketComponent implements OnInit {
  name:string;
  description:string;

  result: string = 'pending...';
  constructor(private ticketService:TicketService, private location:Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  trim():void{
    if(this.name){
      this.name = this.name.trim();
    }

    if(this.description){
      this.description = this.description.trim();
    }
  }

  validateInputs():boolean{
    let goodRequest:boolean = true;
    if(!this.name || this.name.length < 1){
      this.result += "[name is null]"
      goodRequest = false;
    }
    if(!this.description || this.description.length < 1){
      this.result += "[description is null]";
      goodRequest = false;
    }
    return goodRequest;
  }

  submit():void{
    
    this.result = "";

    this.trim();

    if(!this.validateInputs()){
      return;
    }


    let ticket = new Ticket();
    ticket.description = this.description;
    ticket.name = this.name;
    this.ticketService.insertTicket(ticket).then(result=>this.result = JSON.stringify(result)).catch(err=>this.result = err);
  }

}
