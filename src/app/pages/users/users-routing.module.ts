import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersLitComponent} from './users-lit/users-lit.component';
import {UserComponent} from './user/user.component';
import {UsersResolver} from './resolvers/users.resolver';
import {UserResolver} from './resolvers/user.resolver';
import {TasksComponent} from './user/tasks/tasks.component';

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
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        component: TasksComponent,
      },
      {
        path: 'dailies',
        component: TasksComponent,
      },
      {
        path: 'stats',
        component: TasksComponent,
      },
      {
        path: 'history',
        component: TasksComponent,
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
