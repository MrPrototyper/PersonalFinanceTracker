import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';


export const getUser = createAction('[User Auth] Get User', props<{ id: Number }>());
export const getUserSuccess = createAction('[User Auth] Get User Success', props<{ user: User }>());
export const getUserError = createAction('[User Auth] Get User Error');

export const login = createAction('[User Auth] Login', props<{ username: string, password: string }>());
export const loginSuccess = createAction('[User Auth] Login Success', props<{ user: User }>());
export const loginError = createAction('[User Auth] Login Error');