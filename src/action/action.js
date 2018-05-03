import fetch from 'cross-fetch'
import * as ActionCreator from '../action/actionCreator'
import 'babel-polyfill';
import {List} from 'Immutable';


export function sendMessage(message) {

    return function (dispatch, getState) {

        let lastMsg  = List(getState().conversation).filter(c => !c.sender).sort((c1,c2) => c1.id-c2.id).toJS() || null;
        let previousPayload = lastMsg && lastMsg.length && lastMsg[lastMsg.length - 1].payload || null
        console.log('previousPayload:',previousPayload);
        let request  = Object.assign({}, previousPayload && {...previousPayload}, {text: message})

        dispatch(ActionCreator.createSendingMessage());
        dispatch(ActionCreator.createSentMessage(Date.now(), request));
        
        return fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(request)
            })
            .then(
                response => response.json(),
                // Do not use catch, because that will also catch
                // any errors in the dispatch and resulting render,
                // causing a loop of 'Unexpected batch number' errors.
                // https://github.com/facebook/react/issues/6895
                error => console.log('An error occurred.', error)
              )
            .then(json => {
                let receivedAt = Date.now();
                dispatch(ActionCreator.createReceivedMessage(receivedAt, json));
            })
            .catch(err => {
                console.log('err:', err);
                dispatch(ActionCreator.createTechnicalErrorMessage())
            });
    }
}