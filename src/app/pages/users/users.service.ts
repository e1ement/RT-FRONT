import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './models/user.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API_URL}/users`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.API_URL}/users/${id}`);
  }
}
