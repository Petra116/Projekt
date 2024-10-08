import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private location: Location, 
    private authService: AuthService, 
    private router: Router) {}

  ngOnInit(){
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: [''],
      address: [''],
      phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    })
  }

  mustMatch(controlName: string, matchingControlName: string){
    return(formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if(matchingControl.errors && matchingControl.errors['mustMatch']){
        return;
      }

      if(control.value !== matchingControl.value){
        matchingControl.setErrors({mustMatch: true})
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  onSubmit(){
    if(this.signupForm.valid){
      console.log('Form data: ', this.signupForm.value);
      this.authService.register(this.signupForm.value).subscribe({
        next: (data) => {
          console.log(data);
        }, error: (err) => {
          console.log(err);
        }
      });
    } else {
      console.log('Form is not valid.');
    }
    this.router.navigateByUrl('/main')
  }

  goBack(){
    this.location.back();
  }
}
