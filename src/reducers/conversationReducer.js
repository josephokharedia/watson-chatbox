import {SENT_MESSAGE,RECEIVED_MESSAGE, RESET} from '../action/types';

const ConversationReducer = (conversation=[], action) =>{

    switch(action.type){
        case SENT_MESSAGE:
            return conversation.concat(
                {
                    id: action.id,
                    sender: true,
                    payload: action.payload
                });
        case RECEIVED_MESSAGE:
            return conversation.concat(
                {
                    id: action.id,
                    sender: false,
                    payload: action.payload
                });
        case RESET:
            return [];
        default:
            return conversation;
    }
}

export default ConversationReducer;