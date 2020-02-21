import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  form: FormGroup;
  constructor(private http:HttpClient, private fb: FormBuilder, private router:Router) {
    this.form = this.fb.group({
      name: [''],
      description: [''],

    });
    this.http = http;
  }


  ngOnInit() {
  }

}
