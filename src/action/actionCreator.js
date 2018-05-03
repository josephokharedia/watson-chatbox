import { SENDING_MESSAGE,SENT_MESSAGE, RECEIVED_MESSAGE, SET_SELECTED_RESPONSE, RESET, TECHNICAL_ERROR } from './types';


export const createSendingMessage = () => {
    return {
        type: SENDING_MESSAGE
    }
}

export const createSentMessage = (id, payload) => {
    return {
        type: SENT_MESSAGE,
        id,
        payload
    }
}

export const createReceivedMessage = (id, payload) => {
    return {
        type: RECEIVED_MESSAGE,
        id,
        payload
    }
}

export const createSetSelectedResponseMessage = (id) => {
    return {
        type: SET_SELECTED_RESPONSE,
        id
    }
}

export const createResetMessage = () => {
    return {
        type: RESET
    }
}

export const createTechnicalErrorMessage = (error) => {
    return {
        type: TECHNICAL_ERROR,
        error
    }
}