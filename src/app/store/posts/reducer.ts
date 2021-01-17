import { IPosts } from '../../interfaces/posts';
import { PostsActions, PostsActionTypes } from './actions';
 
 
export interface IPostsState {
    data: IPosts[];
}
 
const initialState: IPostsState = {
    data: [],
};
 
export function postsReducer(state = initialState, action: PostsActions): IPostsState {
 
    switch (action.type) {
        case PostsActionTypes.GET_POSTS_LOAD: {
            return {
                ...state,
            }
        }
 
        case PostsActionTypes.GET_POSTS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
            }
        }
        case PostsActionTypes.GET_POSTS_FAIL: {
            return {
                data: [],
            }
        }
        case PostsActionTypes.POST_POSTS: {
            return {
                ...state,
            }
        }
 
        case PostsActionTypes.POST_POSTS_SUCCESS: {
            const updatedData = [...state['data']];
            updatedData.push(action.payload); 
            return {
                ...state,
                data: updatedData,
            }
        }
        case PostsActionTypes.POST_POSTS_FAIL: {
            return {
                data: [],
            }
        }
        default:
            return state;
    }
}