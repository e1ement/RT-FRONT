import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersLitComponent} from './users-lit/users-lit.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: ':id',
    component: UserComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: UsersLitComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
