import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecentUsers, UserData} from '../../../@core/data/users';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';

enum LevelsEnum {
  'Null',
  'Beginner',
  'Elementary',
  'Intermediate',
  'Upper-Intermediate',
  'Advanced',
  'Proficiency',
}

enum ColorsEnum {
  'Null' = '#b00020',
  'Beginner' = '#ff9f05',
  'Elementary' = '#ff9f05',
  'Intermediate' = '#0495ee',
  'Upper-Intermediate' = '#0495ee',
  'Advanced' = '#60af20',
  'Proficiency' = '#60af20',
}

@Component({
  selector: 'ngx-users-lit',
  templateUrl: './users-lit.component.html',
  styleUrls: ['./users-lit.component.scss'],
})
export class UsersLitComponent implements OnInit, OnDestroy {
  users: RecentUsers[];
  dataSource = new MatTableDataSource<RecentUsers>([]);
  displayedColumns: string[] = ['user', 'notification', 'level', 'progress'];
  levelsEnum = LevelsEnum;
  colorsEnum = ColorsEnum;
  private unsubscribe$: Subject<void> = new Subject();

  constructor(private userService: UserData) {
  }

  getStatus(value) {
    if (value <= 25) {
      return 'danger';
    } else if (value <= 50) {
      return 'warning';
    } else if (value <= 75) {
      return 'info';
    } else {
      return 'success';
    }
  }

  ngOnInit(): void {
    this.userService.getRecentUsers().pipe(takeUntil(this.unsubscribe$)).subscribe(value => {
      this.users = value;
      this.dataSource = new MatTableDataSource<RecentUsers>(value);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
