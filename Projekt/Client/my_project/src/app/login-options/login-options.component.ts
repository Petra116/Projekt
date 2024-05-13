import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-options',
  standalone: true,
  imports: [],
  templateUrl: './login-options.component.html',
  styleUrl: './login-options.component.scss'
})
export class LoginOptionsComponent {
  constructor(private router: Router, private location: Location) {}

  navigate(to: string) {
    this.router.navigateByUrl(to);
  }

  goBack(){
    this.location.back();
  }
}
