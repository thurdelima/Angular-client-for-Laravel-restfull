import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import {NgProgress, NgProgressRef} from '@ngx-progressbar/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
  
})
export class UsersComponent implements OnInit {
  progressRef: NgProgressRef;
  public users: any;
  constructor(private service: AppHttpService, public progress: NgProgress) { }

  ngOnInit() {

    this.progressRef = this.progress.ref();
    this.progressRef.start();
    this.service.build('users')
     .list()
     .subscribe((data) => {
      this.progressRef.complete();
      this.users = data;
     });
  }

}
