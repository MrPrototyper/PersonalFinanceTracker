import { createFeatureSelector } from "@ngrx/store";
import { State } from "./app.reducer";

export const getGlobalState = createFeatureSelector<State>('app')