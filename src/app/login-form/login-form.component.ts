import { environment } from '../../environments/environment'
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
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
      formData.append("email", this.form.get('email').value);
      formData.append("password", this.form.get('password').value);
  
      this.http.post<{token: string}>(environment.baseUrl+ '/user/login', {'email': this.form.get('email').value, 'password': this.form.get('password').value}).subscribe(
        (response) => 
        localStorage.setItem('token', response['data']['token']),
        
        
        
        (error) => console.log(formData)
      )
     
      this.router.navigate(['/workspace'])
    }
  
    ngOnInit() {
      
    }
  
  }
  