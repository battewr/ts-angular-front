import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Ticket } from "../domain/ticket";

const urlBase = environment.backendUrl + "/task";

@Injectable()
export class TicketService {

  constructor(private http: Http) { }

  getTickets(): Promise<Ticket[]> {
    return this.http.get(urlBase).toPromise().then(response => response.json() as Ticket[]).catch(this.handleError);
  }

  getTicket(id: string): Promise<Ticket> {
    return this.http.get(urlBase+'/'+id).toPromise().then(response=>response.json() as Ticket).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
