import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { removeNullAndUndefinedProperties } from './service.utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  getByUsername(username: string): Observable<User[]> {
    const params = new HttpParams()
      .append('username', username);

    return this.http.get<User[]>(`${environment.apiUrl}/users`, { params });
  }

  saveUser(user: User): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/users`, user);
  }

  updateUser(user: User) : Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(user: User) : Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/users/${user.id}`);
  }

  getUserByQueryparamObject(queryParamObj) {
    const fromObject = removeNullAndUndefinedProperties(queryParamObj);

    const params = new HttpParams({ fromObject });

    return this.http.get<User[]>(`${environment.apiUrl}/users`, { params });
  }
}
