import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from '@angular/router';
import {NgProgress, NgProgressRef} from '@ngx-progressbar/core';
import { AppHttpService} from '../../app-http.service';


@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.css']
})
export class UsersShowComponent implements OnInit {
  progressRef: NgProgressRef;
  public user: object = {};

  constructor(private service: AppHttpService,
              private route: ActivatedRoute,
              private router: Router,
              public progress: NgProgress) { }

  ngOnInit() {
    this.progressRef = this.progress.ref();
    this.route.params
     .subscribe((params) => {
      this.view(params.id);
     });
  }

  view (id) {
    this.progressRef.start();
    this.service.build('users')
      .get(id)
      .subscribe((data) => {
        this.progressRef.complete();
        this.user = data;
      });
  }


  delete (id) {
    if (confirm('Você tem certeza?')) {
      this.service.build('users')
       .delete(id)
       .subscribe(() => {
       this.router.navigate(['/users']);
      });

    }
  }

}
