import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.form = this.fb.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
  }

  login() {
    console.log(this.form.value.username)
    this.authService.getUser(this.form.value.username)
      .subscribe((user: User) => {
        if (user) {
          this.router.navigateByUrl(this.returnUrl);
        } else {
          alert('Usuário ou senha incorreta');
        }
      });
  }
}
