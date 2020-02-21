import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.css']
})
export class WorkspaceListComponent implements OnInit {
  private data:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {

   this.http.get<{token: string}>(environment.baseUrl + '/workspace/created',{headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe((res)=>{
     this.data = res['data']
     console.log(this.data)
   })

  }

}
