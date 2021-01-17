import { IUsers } from '../../interfaces/users';
import { UsersActions, UsersActionTypes } from './actions';
 
 
export interface IUsersState {
    data: IUsers[];
}
 
const initialState: IUsersState = {
    data: []
};
 
export function reducer(state = initialState, action: UsersActions): IUsersState {
 
    switch (action.type) {
        case UsersActionTypes.GET_USERS_LOAD: {
            return {
                ...state,
            }
        }
 
        case UsersActionTypes.GET_USERS_SUCCESS: {
            return {
                ...state,
                data: action.payload
            }
        }
        case UsersActionTypes.GET_USERS_FAIL: {
            return {
                data: []
            }
        }
        case UsersActionTypes.POST_USER: {
            return {
                ...state,
            }
        }
 
        case UsersActionTypes.POST_USER_SUCCESS: {
            const updatedData = [...state['data']];
            updatedData.push(action.payload);
            return {
                ...state,
                data: updatedData            
            }
        }
        case UsersActionTypes.POST_USER_FAIL: {
            return {
                data: [],
            }
        }
        default:
            return state;
    }
}