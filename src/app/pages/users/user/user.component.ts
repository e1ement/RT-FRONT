import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data.user;
  }

}
