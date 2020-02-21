import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-workspace-invite',
  templateUrl: './workspace-invite.component.html',
  styleUrls: ['./workspace-invite.component.css']
})
export class WorkspaceInviteComponent implements OnInit {
  form:FormGroup
  public_id: any;
  constructor(private http: HttpClient, private  fb: FormBuilder, private router: Router, private route:ActivatedRoute ) {
    this.form = this.fb.group({
      email: ['']

    });
    this.http = http;

   }

  invite() {
   const formData = new FormData();
   const public_id = this.route.params['value']['public_id'];
   console.log(public_id);
   formData.append('workspace_id', public_id);
   formData.append('email', this.form.get('email').value);

   this.http.post<{token: string}>(environment.baseUrl+'/workspace/invite', {'workspace_id': public_id, 'email': this.form.get('email').value}, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}).subscribe(
     (response) => console.log(response),
     (error) => console.log(formData)
   )
  }
  ngOnInit() {
  }

}
