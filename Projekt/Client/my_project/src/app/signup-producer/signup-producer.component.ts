import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-producer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup-producer.component.html',
  styleUrl: './signup-producer.component.scss'
})
export class SignupProducerComponent implements OnInit{
  signupProducerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private location: Location, 
    private authService: AuthService, 
    private router: Router) {}

  ngOnInit(){
    this.signupProducerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
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
    if(this.signupProducerForm.valid){
      console.log('Form data: ', this.signupProducerForm.value);
      this.authService.registerProducer(this.signupProducerForm.value).subscribe({
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
