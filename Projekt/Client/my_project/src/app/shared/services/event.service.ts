import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) { }

  addEvent(event: Event){
    //HTTP POST request
    const body = new URLSearchParams();
    body.set('name', event.name);
    body.set('place', event.place);
    body.set('date', event.date);
    body.set('time', event.time);
    body.set('organizer', event.organizer);
    body.set('price', event.price);
    body.set('capacity', event.capacity);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post('http://localhost:5000/app/addEvent', body, {headers: headers})
  }

  getAllEvents(){
    return this.http.get<Event[]>('http://localhost:5000/app/getAllEvents');
  }
}
