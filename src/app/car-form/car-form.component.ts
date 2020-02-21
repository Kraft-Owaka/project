import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  form: FormGroup;
  public_id: any;
  constructor(private http: HttpClient, private  fb: FormBuilder, private router: Router, private route:ActivatedRoute) {
    this.form = this.fb.group({
      owner_name: [''],
      license_plate: [''],
      noofseats: [''],


    });
    this.http = http;
  }

createCar() {
  const formData = new FormData();
   const public_id = this.route.params['value']['public_id'];
   console.log(public_id);
   formData.append('workspace_id', public_id);
   formData.append('owner_name', this.form.get('owner_name').value);
   formData.append('license_plate', this.form.get('license_plate').value);
   formData.append('noofseats',this.form.get('noofseats').value);

   this.http.post<{token: string}>(environment.baseUrl+'/cars/create', {'workspace_id': public_id, 'owner_name': this.form.get('owner_name').value,'license_plate': this.form.get('license_plate').value, 'seats': this.form.get('noofseats').value}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe(
     (response) => console.log(response),
     (error) => console.log(formData)
   )

}
  ngOnInit() {
  }

}
