import { Action } from '@ngrx/store';
import { IUsers } from '../../interfaces/users';
import { HttpErrorResponse } from '@angular/common/http';
 
export enum UsersActionTypes {
    GET_USERS_LOAD = '[Users] Get Users',
    GET_USERS_SUCCESS = '[Users] Get Users Success',
    GET_USERS_FAIL = '[Users] Get Users Fail',
    POST_USER = '[Users] Post Users',
    POST_USER_SUCCESS = '[Users] Post Users Success',
    POST_USER_FAIL = '[Users] Post Users Fail',
}
 
 
export class GetUsersLoad implements Action {
    public readonly type = UsersActionTypes.GET_USERS_LOAD;
}
 
export class GetUsersSuccess implements Action {
    public readonly type = UsersActionTypes.GET_USERS_SUCCESS;
 
    constructor(public payload: IUsers[]) { }
}
 
export class GetUsersFail implements Action {
    public readonly type = UsersActionTypes.GET_USERS_FAIL;
 
    constructor(public error: HttpErrorResponse) { }
}
 
export class PostUser implements Action {
    public readonly type = UsersActionTypes.POST_USER;
 
    constructor(public payload: IUsers) { }
}
 
export class PostUserSuccess implements Action {
    public readonly type = UsersActionTypes.POST_USER_SUCCESS;
 
    constructor(public payload: IUsers) { }
}
 
export class PostUserFail implements Action {
    public readonly type = UsersActionTypes.POST_USER_FAIL;
 
    constructor(public error: HttpErrorResponse) { }
}
 
export type UsersActions = 
    GetUsersLoad | 
    GetUsersSuccess | 
    GetUsersFail |
    PostUser | 
    PostUserSuccess | 
    PostUserFail
;