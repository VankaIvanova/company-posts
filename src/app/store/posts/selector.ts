import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPostsState } from ".";
 
export const getPostsState = createFeatureSelector<IPostsState>('posts');
 
export const allPosts = createSelector(getPostsState, (state: IPostsState) => {
    return state
});