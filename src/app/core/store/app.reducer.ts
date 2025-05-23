import { createReducer, on } from '@ngrx/store';
import * as fromActions from './app.actions'
import { init, ResultState, setError, setLoaded, setLoading } from 'src/app/shared/models/result-state.model';

export interface State {
   user: ResultState; 
}

const initialState: State = {
    user: init(),
};

export const reducers = createReducer(
    initialState,

    on(fromActions.getUser, (state) => ({ ...state, user: setLoading(state.user) })),
    on(fromActions.getUserSuccess, (state, { user }) => ({ ...state, user: setLoaded(user) })),
    on(fromActions.getUserError, (state) => ({ ...state, user: setError('Error loading user.') })),

    on(fromActions.login, (state) => ({ ...state, user: setLoading(state.user) })),
    on(fromActions.loginSuccess, (state, { user }) => ({ ...state, user: setLoaded(user) })),
    on(fromActions.loginError, (state) => ({ ...state, user: setError('Error login in.') })),
);

export const getReducers = (): any => {
    return reducers;
};