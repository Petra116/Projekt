import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/model/Product';

@Component({
  selector: 'app-producer-main',
  standalone: true,
  imports: [],
  templateUrl: './producer-main.component.html',
  styleUrl: './producer-main.component.scss'
})
export class ProducerMainComponent {

  constructor(private router: Router) {}

  navigate(to: string) {
    this.router.navigateByUrl(to);
  }
}
