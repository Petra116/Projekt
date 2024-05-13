import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event} from '../shared/model/Event';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'app-guest-events',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './guest-events.component.html',
  styleUrl: './guest-events.component.scss'
})
export class GuestEventsComponent implements OnInit{
  events?: Event[];
  columns = ['name', 'place', 'date', 'time', 'organizer', 'price', 'capacity'];

  constructor(private eventService: EventService,
    private router: Router, 
    private location: Location){}

  ngOnInit(){
    this.eventService.getAllEvents().subscribe({
      next: (data) => {
        this.events=data;
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  navigate(to: string){
    this.router.navigateByUrl(to);
  }

  goBack(){
    this.location.back();
  }
}
