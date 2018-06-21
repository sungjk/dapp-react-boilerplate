import { chatActionType } from 'src/redux/actionTypes';
import merge from 'lodash/merge';

const initialState = {
    isFetching: true,
    count: 0,
};

export function chats(state = initialState, action) {
    switch (action.type) {
        // success
        case chatActionType.SET_WEB3_INSTANCE_SUCCESS:
        case chatActionType.GET_SPACES_SUCCESS:
        // failure
        case chatActionType.SET_WEB3_INSTANCE_FAILURE:
        case chatActionType.GET_SPACES_FAILURE:
        default:
            return state;
    }
}

