import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppFacade } from 'src/app/core/store/app.facade';


@Component({
  standalone: true,
  selector: 'app-login-container',
  imports: [CommonModule, LoginComponent],
  providers: [AppFacade],
  template: `<app-login-component (login)="onLogin($event)"></app-login-component>`,
  styleUrls: ['./login.component.scss']
})
export class LoginContainer {

  constructor(private appFacade: AppFacade) { }

  public onLogin(user: any) {
    this.appFacade.login(user.email, user.password);
  }
}
