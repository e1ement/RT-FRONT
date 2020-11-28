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
  tabs: any[] = [
    {
      title: 'Статистика',
      route: './stats',
    },
    {
      title: 'Задачи',
      route: './tasks',
    },
    {
      title: 'Дэйлики',
      route: './dailies',
    },
    {
      title: 'История',
      route: './history',
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data.user;
  }

}
