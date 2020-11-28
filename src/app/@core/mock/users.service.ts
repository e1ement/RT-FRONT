import {Observable, of as observableOf} from 'rxjs';
import {Injectable} from '@angular/core';
import {Contacts, RecentUsers, UserData} from '../data/users';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    nick: {name: 'Nick Jones', picture: 'assets/images/nick.png'},
    eva: {name: 'Eva Moor', picture: 'assets/images/eva.png'},
    jack: {name: 'Jack Williams', picture: 'assets/images/jack.png'},
    lee: {name: 'Lee Wong', picture: 'assets/images/lee.png'},
    alan: {name: 'Alan Thompson', picture: 'assets/images/alan.png'},
    kate: {name: 'Kate Martinez', picture: 'assets/images/kate.png'},
  };
  private levels = {
    beginner: 'Beginner',
    elementary: 'Elementary',
    intermediate: 'Intermediate',
    upperIntermediate: 'Upper-Intermediate',
    advanced: 'Advanced',
    proficiency: 'Proficiency',
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    {user: this.users.nick, type: this.types.mobile},
    {user: this.users.eva, type: this.types.home},
    {user: this.users.jack, type: this.types.mobile},
    {user: this.users.lee, type: this.types.mobile},
    {user: this.users.alan, type: this.types.home},
    {user: this.users.kate, type: this.types.work},
  ];
  private recentUsers: RecentUsers[] = [
    {
      user: this.users.alan,
      progress: 12,
      level: this.levels.elementary,
      type: this.types.home,
      time: this.time.setHours(21, 12),
    },
    {
      user: this.users.eva,
      progress: 27,
      level: this.levels.beginner,
      type: this.types.home,
      time: this.time.setHours(17, 45),
      notification: 'warning',
    },
    {
      user: this.users.nick,
      progress: 46,
      level: this.levels.intermediate,
      type: this.types.mobile,
      time: this.time.setHours(5, 29),
    },
    {
      user: this.users.lee,
      progress: 62,
      level: this.levels.upperIntermediate,
      type: this.types.mobile,
      time: this.time.setHours(11, 24),
      notification: 'danger',
    },
    {
      user: this.users.jack,
      progress: 33,
      level: this.levels.advanced,
      type: this.types.mobile,
      time: this.time.setHours(10, 45),
      notification: 'warning',
    },
    {
      user: this.users.kate,
      progress: 89,
      level: this.levels.proficiency,
      type: this.types.work,
      time: this.time.setHours(9, 42),
    },
  ];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
