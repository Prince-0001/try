import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../servies/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  authService=inject(AuthService);
  signupForm: FormGroup;
  error:string=""

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const success=this.authService.register(this.signupForm.value.username,this.signupForm.value.password);
      console.log(success);
      if(!success){
        this.error="user already exists"
        return ;
      }
        console.log('Form Submitted', this.signupForm.value);
      this.signupForm.reset();
      
      
    }
    else{
      console.log("form invalid")
    }
  }
}


