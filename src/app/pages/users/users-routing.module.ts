import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersLitComponent} from './users-lit/users-lit.component';
import { UserComponent } from './user/user.component';
import {UsersResolver} from './resolvers/users.resolver';
import {UserResolver} from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: UserComponent,
    resolve: {
      user: UserResolver,
    },
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
export class UsersRoutingModule { }
