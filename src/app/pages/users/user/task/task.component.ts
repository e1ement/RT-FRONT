import {Component, Input, OnInit} from '@angular/core';
import {Task, User} from '../../models/user.model';

@Component({
  selector: 'ngx-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() user: User;
  descriptionLang: string = 'en';

  constructor() {
  }

  ngOnInit(): void {
  }

}
