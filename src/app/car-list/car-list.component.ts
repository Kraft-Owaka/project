import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  private data:any;
  public_id:any;
  constructor(private http:HttpClient, private router: Router, private route:ActivatedRoute) {
    this.http = http;
   }

  ngOnInit() {
    const public_id = this.route.params['value']['public_id'];
    this.http.get<{token: string}>(environment.baseUrl + `/cars?workspace_id=${public_id}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe((res)=>{
      this.data = res['data']
      console.log(res)
    })
  }

}
