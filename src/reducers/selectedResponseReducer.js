import {
    SET_SELECTED_RESPONSE,
    RESET
} from '../action/types';

const SelectedResponseReducer = (selectedResponse = null, action) => {

    switch (action.type) {
        case SET_SELECTED_RESPONSE:
            return action.id || null
        case RESET:
            return null;
        default:
            return null;
    }
}

export default SelectedResponseReducer;