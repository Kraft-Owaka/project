import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-workspace-form',
  templateUrl: './workspace-form.component.html',
  styleUrls: ['./workspace-form.component.css']
})
export class WorkspaceFormComponent implements OnInit {
  form: FormGroup;
  constructor(private http: HttpClient, private  fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: [''],
      description: [''],

    });
    this.http = http;
   }

  create() {
    const formData = new FormData();
    formData.append('name', this.form.get('name').value);
    formData.append('description', this.form.get('description').value);
    this.http.post<{token: string}>(environment.baseUrl + '/workspace/create', {name: this.form.get('name').value, description: this.form.get('description').value}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe(

      (response) => console.log(response),
      (error) => console.log(formData)
    );
      // console.log("Workspace created")

  }

  ngOnInit() {
  }


}
