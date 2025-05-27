import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import * as fromSelectors from './app.selectors';
import * as fromActions from './app.actions';

@Injectable()
export class AppFacade {
    constructor(protected store$: Store<any>) {}
    
    public user$: Observable<User> = this.store$.pipe(select(fromSelectors.selectUser));

    public login(username: string, password:string): void {                
        this.store$.dispatch(fromActions.login({ username, password }));
    }
}