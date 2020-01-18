import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isAuthenticated = false;

  constructor(private authService: AuthService) {
    this.isAuthenticated = !!authService.getAuthenticatedUser();
  }

  ngOnInit() {
    this.authService.getUserIsLogged()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
  }

}
