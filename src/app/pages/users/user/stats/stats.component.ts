import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  user: User;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.activatedRoute.parent.snapshot.data.user;
  }

}
