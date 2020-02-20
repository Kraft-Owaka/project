import { resolve } from 'url';
import { User } from './user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) {
      
      this.http = http
   }

   registerUser(){
     const promise = new Promise((resolve, reject)=> {
        this.http.post(environment.baseUrl+"/user", {'username':'hannes1', 'email':'hanneskimara1@gmail.com', 'password': '1234'}).toPromise().then(response => {
          console.log(response)
          resolve();
        },
        error => {
          console.log('Not recieving response');
          reject(error)
        })
     });
      return promise
     }
   }

