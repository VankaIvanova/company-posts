import { Action } from '@ngrx/store';
import { IPosts } from '../../interfaces/posts';
import { HttpErrorResponse } from '@angular/common/http';
 
export enum PostsActionTypes {
    GET_POSTS_LOAD = '[Posts] Get Posts',
    GET_POSTS_SUCCESS = '[Posts] Get Posts Success',
    GET_POSTS_FAIL = '[Posts] Get Posts Fail',
    POST_POSTS = '[Posts] Post Posts',
    POST_POSTS_SUCCESS = '[Posts] Post Posts Success',
    POST_POSTS_FAIL = '[Posts] Post Posts Fail',
}
 
 
export class GetPostsLoad implements Action {
    public readonly type = PostsActionTypes.GET_POSTS_LOAD;
}
 
export class GetPostsSuccess implements Action {
    public readonly type = PostsActionTypes.GET_POSTS_SUCCESS;
 
    constructor(public payload: IPosts[]) { }
}
 
export class GetPostsFail implements Action {
    public readonly type = PostsActionTypes.GET_POSTS_FAIL;
 
    constructor(public error: HttpErrorResponse) { }
}
 
export class PostPosts implements Action {
    public readonly type = PostsActionTypes.POST_POSTS;
 
    constructor(public payload: IPosts) { }
}
 
export class PostPostsSuccess implements Action {
    public readonly type = PostsActionTypes.POST_POSTS_SUCCESS;
 
    constructor(public payload: IPosts) { }
}
 
export class PostPostsFail implements Action {
    public readonly type = PostsActionTypes.POST_POSTS_FAIL;
 
    constructor(public error: HttpErrorResponse) { }
}
 
export type PostsActions = 
    GetPostsLoad | 
    GetPostsSuccess | 
    GetPostsFail | 
    PostPosts | 
    PostPostsSuccess | 
    PostPostsFail
;