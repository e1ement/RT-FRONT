import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersLitComponent} from './users-lit/users-lit.component';
import {UserComponent} from './user/user.component';
import {
    NbAccordionModule, NbButtonModule,
    NbCardModule, NbChatModule,
    NbIconModule,
    NbListModule,
    NbProgressBarModule, NbRouteTabsetModule,
    NbTooltipModule,
    NbUserModule,
} from '@nebular/theme';
import {MatTableModule} from '@angular/material/table';
import {NgxStarsModule} from 'ngx-stars';
import { TasksComponent } from './user/tasks/tasks.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import { StatsComponent } from './user/stats/stats.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { TaskComponent } from './user/task/task.component';
import { DailiesComponent } from './user/dailies/dailies.component';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [UsersLitComponent, UserComponent, TasksComponent, StatsComponent, TaskComponent, DailiesComponent],
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
    NbRouteTabsetModule,
    NbAccordionModule,
    NbChatModule,
    MatButtonToggleModule,
    MatInputModule,
    RoundProgressModule,
    NbButtonModule,
    MatRippleModule,
  ],
})
export class UsersModule {
}
