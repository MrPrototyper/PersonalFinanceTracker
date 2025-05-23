import { createSelector } from '@ngrx/store';
import { getResult } from '../../shared/models/result-state.model';
import { User } from '../models/user.model';
import { getGlobalState } from '.';

export const selectUser = createSelector(getGlobalState, state => getResult(state.user) as User);