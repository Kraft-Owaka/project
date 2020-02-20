import { environment } from './../../environments/environment';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {
  form: FormGroup;
  constructor(private  fb:FormBuilder,private http:HttpClient, private router: Router) {
    this.form = this.fb.group({
      username:[''],
      email:[''],
      password:['']
    })
    this.http = http
  }

  submitForm() {
    var formData = new FormData();
    formData.append("username", this.form.get('username').value);
    formData.append("email", this.form.get('email').value);
    formData.append("password", this.form.get('password').value);

    this.http.post(environment.baseUrl+ '/user/register', {'email': this.form.get('email').value, 'username': this.form.get('username').value, 'password': this.form.get('password').value}).subscribe(
      (response) => console.log(response),
      (error) => console.log(formData)
    )
      this.router.navigate(['/login'])
  }

  ngOnInit() {
    
  }

}
