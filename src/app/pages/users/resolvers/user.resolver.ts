import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {UsersService} from '../users.service';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<User> {
  constructor(
    private usersService: UsersService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.usersService.getUserById(+route.params.id);
  }
}
