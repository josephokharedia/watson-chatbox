import {SENT_MESSAGE,RECEIVED_MESSAGE, RESET} from '../action/types';

const ResponseReducer = (responses=[], action) =>{

    switch(action.type){
        case RECEIVED_MESSAGE:
            return responses.concat(
                {
                    id: action.id,
                    status: action.payload.status,
                    raw: action.payload.raw
                });
        case RESET:
            return [];
        default:
            return responses;
    }
}

export default ResponseReducer;