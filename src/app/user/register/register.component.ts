import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!:FormGroup;
  submited=false;

  constructor(private fb:FormBuilder){
    this.registerForm = fb.group({
      name:['', Validators.required],
      password:['', [Validators.required,Validators.minLength(8), Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$')]],
      email:['',[Validators.required,Validators.email, Validators.pattern((/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))]]
    })
  }

  get registerFormControl(){
    return this.registerForm.controls
  }

  onSubmit(){
    if(this.registerForm.valid && this.submited == false){
      alert('Formulario enviado')
      this.submited=true;
    }else{
      alert('Formulario no enviado')
    }
  }

  resetForm(){
    this.registerForm.reset();
    this.submited=false
  }
}
