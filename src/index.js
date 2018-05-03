import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import store from './store/store'
import * as actionCreator from './action/actionCreator'
import {Provider} from 'react-redux';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reset from './components/chatbox/reset.js';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root'));


// store.dispatch(actionCreator.createSendingMessage());
// store.dispatch(actionCreator.createSentMessage(Date.now(), 'Hi'));

let receivedMessageAt = Date.now();
let raw ={
    "name":"John",
    "age":30,
    "cars": {
        "car1":"Ford",
        "car2":"BMW",
        "car3":"Fiat"
    }
 };
// store.dispatch(actionCreator.createReceivedMessage(receivedMessageAt, 'Hi, How can I help you?', 200, raw));
// store.dispatch(actionCreator.createSetSelectedResponseMessage(receivedMessageAt));
// store.dispatch(actionCreator.createResetMessage());
// store.dispatch(actionCreator.createTechnicalErrorMessage());
// store.dispatch(actionCreator.createSendingMessage());