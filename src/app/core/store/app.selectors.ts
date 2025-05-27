import { createSelector } from '@ngrx/store';
import { getResult } from '../../shared/models/result-state.model';
import { User } from '../models/user.model';
import { getGlobalState } from '.';
import { State } from './app.reducer';

export const selectUser = createSelector(getGlobalState, (state: State) => getResult(state.user) as User);