import { combineReducers } from 'redux';

import { chats } from './chats';
import { users } from './users';

export default combineReducers({
    gamblings: chats,
    users,
});
