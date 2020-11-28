import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecentUsers, UserData} from '../../../@core/data/users';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {ColorsEnum, LevelsEnum, NotificationsEnum, PaymentLevelEnum, User} from '../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {NbIconLibraries} from '@nebular/theme';

@Component({
  selector: 'ngx-users-lit',
  templateUrl: './users-lit.component.html',
  styleUrls: ['./users-lit.component.scss'],
})
export class UsersLitComponent implements OnInit, OnDestroy {
  users: User[];
  displayedColumns: string[] = ['user', 'paymentLevel', 'notification', 'level', 'progress'];
  levelsEnum = LevelsEnum;
  colorsEnum = ColorsEnum;
  notificationsEnum = NotificationsEnum;
  paymentLevelEnum = PaymentLevelEnum;
  private unsubscribe$: Subject<void> = new Subject();

  /*constructor(iconsLibrary: NbIconLibraries) {
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);

    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }*/


  constructor(private activatedRoute: ActivatedRoute, iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
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
    this.users = this.activatedRoute.snapshot.data.users;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
