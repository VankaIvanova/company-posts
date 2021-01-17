import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { Action } from '@ngrx/store';
import * as fromPosts from '.'
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IPosts } from '../../interfaces/posts';
import { PostsActionTypes } from './actions';
 
@Injectable()
export class PostsEffects {
 
    constructor(
        private actions$: Actions,
        private postsService: PostsService
    ) {}
 
    @Effect()
    getPosts$ = createEffect(() =>
        this.actions$.pipe(
        ofType(fromPosts.PostsActionTypes.GET_POSTS_LOAD),
        mergeMap(() =>
            this.postsService.getPosts().pipe(
            map((post: IPosts) => ({ type: PostsActionTypes.GET_POSTS_SUCCESS, payload: post })),
            catchError((error) =>
                of(new fromPosts.GetPostsFail(error)))
            )
        )
        )
    );
 
    @Effect()
    addPost$: Observable<Action> = this.actions$.pipe(
        ofType(fromPosts.PostsActionTypes.POST_POSTS),
        map((action: fromPosts.PostPosts) => action.payload),
        mergeMap((post: IPosts) =>
            this.postsService.createPosts(post).pipe(
                map((post: IPosts) => {
                    return new fromPosts.PostPostsSuccess(post);
                }),
                catchError((error) =>
                    of(new fromPosts.PostPostsFail(error)))
            )
        ));
}