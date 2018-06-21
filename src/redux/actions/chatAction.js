import { chatActionType } from 'src/redux/actionTypes';
import { chatService } from 'src/redux/services';

function setWeb3Instance() {
    return dispatch => {
        return chatService.setWeb3Instance()
        .then(() => dispatch(success()))
        .catch(error => dispatch(failure(error)));
    };
    
    function success() { return { type: chatActionType.SET_WEB3_INSTANCE_SUCCESS }; }
    function failure(error) { return { type: chatActionType.SET_WEB3_INSTANCE_FAILURE, error }; }
}

export const chatAction = {
    setWeb3Instance,
};
