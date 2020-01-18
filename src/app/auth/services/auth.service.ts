import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, throwError, Subject } from 'rxjs';
import { User } from '../../core/models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticatedUser: any;
  private subject = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  getToken(): string {
    return 'token';
  }

  private setAuthenticatedUser(user) {
    this.authenticatedUser = user;
    localStorage.setItem('user', JSON.stringify(user));
    this.subject.next(true);
  }

  logout() {
    this.authenticatedUser = null;
    localStorage.setItem('user', null);
    this.redirectToLogin();
    this.subject.next(false);
  }

  getUserIsLogged(): Observable<boolean> {
    return this.subject.asObservable();
  }

  getAuthenticatedUser(): User {
    return this.authenticatedUser || JSON.parse(localStorage.getItem('user')) || null;
  }

  redirectToNotAuthorizedPage() {
    return this.router.navigate(['/403']);
  }

  redirectToLogin(returnUrl?) {
    
    if (returnUrl) {
      return this.router.navigate(['/login'], { queryParams: { returnUrl } });
    }

    return this.router.navigate(['/login']);
  }

  getUser(username: string): Observable<User> {
    const params = new HttpParams()
      .append('username', username);
    return this.http.get<User>('http://localhost:3000/users', { params })
      .pipe(
        map((users) => {
          console.log(users)
          return users && users[0] || null;
        }),
        tap((user) => {
          console.log(user);
          if (user) {
            this.setAuthenticatedUser(user);
          }
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }
}
