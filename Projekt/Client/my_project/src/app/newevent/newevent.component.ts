import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventService } from '../shared/services/event.service';

@Component({
  selector: 'app-newevent',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './newevent.component.html',
  styleUrl: './newevent.component.scss'
})
export class NeweventComponent {
  eventForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private eventService: EventService, 
    private location: Location) {}

  ngOnInit(){
    this.eventForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      place: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      organizer: ['', [Validators.required]],
      price: ['', [Validators.required]],
      capacity: ['']
    })
  }

  onSubmit(){
    if(this.eventForm.valid){
      console.log('Form data: ', this.eventForm.value);
      this.eventService.addEvent(this.eventForm.value).subscribe({
        next: (data) => {
          console.log(data);
        }, error: (err) => {
          console.log(err);
        }
      });
    } else {
      console.log('Form is not valid.');
    }
  }

  goBack(){
    this.location.back();
  }
}
