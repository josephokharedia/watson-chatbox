import {S, SENDING_MESSAGE, TECHNICAL_ERROR, RECEIVED_MESSAGE} from '../action/types';

const StatusReducer = (status, action) =>{

    switch(action.type){
        case SENDING_MESSAGE:
            return Object.assign({}, reset(), {sending: true});
        case TECHNICAL_ERROR:
            return Object.assign({}, reset(), {error: true});
        default:
            return reset();
    }
}

const reset = () => {
    return Object.assign({}, {sending: false, error: false});
}

export default StatusReducer;