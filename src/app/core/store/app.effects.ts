import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { AuthService } from "../services/auth.service";
import * as fromActions from './app.actions'

@Injectable()
export class UserEffect {
    constructor( private actions$: Actions, private authService: AuthService ) {}
    
    login$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromActions.login), 
            mergeMap((action: { username: string, password: string }) => {                        
                return this.authService.login(action.username, action.password).pipe(
                    map((response: any) => {                                                            
                        return fromActions.loginSuccess({ user: response })
                    }),
                    catchError(() => of(fromActions.loginError())),
                );
            }),
        ),
    );
}