import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersLitComponent} from './users-lit/users-lit.component';
import {UserComponent} from './user/user.component';
import {
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbProgressBarModule,
  NbTooltipModule,
  NbUserModule
} from '@nebular/theme';
import {MatTableModule} from '@angular/material/table';
import {NgxStarsModule} from 'ngx-stars';

@NgModule({
  declarations: [UsersLitComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    MatTableModule,
    NgxStarsModule,
    NbProgressBarModule,
    NbTooltipModule,
    NbIconModule,
  ],
})
export class UsersModule {
}
