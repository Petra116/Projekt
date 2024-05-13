import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login-producer',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, MatProgressSpinnerModule],
  templateUrl: './login-producer.component.html',
  styleUrl: './login-producer.component.scss'
})
export class LoginProducerComponent {
  email:string='';
  password: string='';
  errorMessage: string='';
  isLoading=false;

  constructor(private router: Router, 
    private authService: AuthService, private location: Location) {}

  login(){
    this.isLoading=true;
    setTimeout(() => {
      if(this.email && this.password){
        this.errorMessage='';
        this.authService.login(this.email, this.password).subscribe({
          next: (data) => {
            if(data){
              //navigation
              console.log(data);
              this.isLoading=false;
              this.router.navigateByUrl('/producer/main');
              //this.router.navigateByUrl('/main');
            } 
          }, error: (err) => {
            console.log(err);
            this.isLoading=false;
          }
        });
      } else{
        this.isLoading=false;
        this.errorMessage='Form is empty.';
      }
    }, 400)
  }

  navigate(to: string){
    this.router.navigateByUrl(to);
  }

  goBack(){
    this.location.back();
  }
}