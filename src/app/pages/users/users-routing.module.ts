import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersLitComponent} from './users-lit/users-lit.component';
import {UserComponent} from './user/user.component';
import {UsersResolver} from './resolvers/users.resolver';
import {UserResolver} from './resolvers/user.resolver';
import {TasksComponent} from './user/tasks/tasks.component';
import {StatsComponent} from './user/stats/stats.component';
import {DailiesComponent} from './user/dailies/dailies.component';

const routes: Routes = [
  {
    path: ':id',
    component: UserComponent,
    resolve: {
      user: UserResolver,
    },
    children: [
      {
        path: '',
        redirectTo: 'stats',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        component: TasksComponent,
      },
      {
        path: 'dailies',
        component: DailiesComponent,
      },
      {
        path: 'stats',
        component: StatsComponent,
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    component: UsersLitComponent,
    resolve: {
      users: UsersResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
