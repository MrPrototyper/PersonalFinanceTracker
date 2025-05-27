import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppFacade } from 'src/app/core/store/app.facade';
import { User } from 'src/app/core/models/user.model';
import { Observable } from 'rxjs';


@Component({
  standalone: true,
  selector: 'app-login-container',
  imports: [CommonModule, LoginComponent],
  providers: [AppFacade],
  template: `<app-login-component [currentUser]="currentUser$ | async" (login)="onLogin($event)"></app-login-component>`,
  styleUrls: ['./login.component.scss']
})
export class LoginContainer {
  public currentUser$: Observable<User>;

  constructor(private appFacade: AppFacade) { 
    this.currentUser$ = appFacade.user$;    
  }

  public onLogin(user: any) {
    this.appFacade.login(user.email, user.password);
  }
}
