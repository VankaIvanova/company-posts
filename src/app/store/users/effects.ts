import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { Action } from '@ngrx/store';
import * as fromUsers from '.'
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IUsers } from '../../interfaces/users';
import { UsersActionTypes } from './actions';
 
@Injectable()
export class UsersEffects {
 
    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) {}
 
    @Effect()
    getUsers$ = createEffect(() =>
        this.actions$.pipe(
        ofType(fromUsers.UsersActionTypes.GET_USERS_LOAD),
        mergeMap(() =>
            this.usersService.getUsers().pipe(
            map((user: IUsers) => ({ type: UsersActionTypes.GET_USERS_SUCCESS, payload: user })),
            catchError((error) =>
                of(new fromUsers.GetUsersFail(error)))
            )
        )
        )
    );
 
    @Effect()
    addUser$: Observable<Action> = this.actions$.pipe(
        ofType(fromUsers.UsersActionTypes.POST_USER),
        map((action: fromUsers.PostUser) => action.payload),
        mergeMap((user: IUsers) =>
            this.usersService.addUser(user).pipe(
                map((user: IUsers) => {
                    return new fromUsers.PostUserSuccess(user);
                }),
                catchError((error) =>
                    of(new fromUsers.PostUserFail(error)))
            )
        ));
}