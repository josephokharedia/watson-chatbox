import {combineReducers} from 'redux';
import conversationReducer from './conversationReducer'
import statusReducer from './statusReducer';
import responseReducer from './responseReducer';
import selectedResponseReducer from './selectedResponseReducer';

export const rootReducer = combineReducers({
    conversation: conversationReducer,
    status: statusReducer,
    responses: responseReducer,
    selectedResponse: selectedResponseReducer
});