import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {NgProgress, NgProgressRef} from '@ngx-progressbar/core';
import { AppHttpService} from '../../app-http.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  progressRef: NgProgressRef;
  public user: object = {};

  constructor(private service: AppHttpService,
              private router: Router,
              private route: ActivatedRoute,
              public progress: NgProgress) { }

  ngOnInit() {
    this.progressRef = this.progress.ref();
    this.route.params
     .subscribe((params) => this.view(params.id));
  }

  view (id) {
    this.progressRef.start();
    this.service.build('users')
      .get(id)
      .subscribe((data) =>{
        this.progressRef.complete();
        this.user = data
      });
  }

  update () {
    this.service.build('users')
     .update(this.user.id , this.user)
     .subscribe(() => {
        this.router.navigate(['/users/' + this.user.id]);
     });
  }

}
