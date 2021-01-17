import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUsersState } from ".";
 
export const getUsersState = createFeatureSelector<IUsersState>('users');
 
export const allUsers = createSelector(getUsersState, (state: IUsersState) => {
    return state
});