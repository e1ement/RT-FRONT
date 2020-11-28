import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User, Task} from '../../models/user.model';

@Component({
  selector: 'ngx-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  user: User;
  tasks: Task[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user = this.activatedRoute.parent.snapshot.data.user;
    this.tasks = this.user.tasks;
  }

}
