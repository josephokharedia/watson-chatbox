import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducers/rootReducer';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {sendMessage} from '../action/action';

const loggerMiddleware = createLogger();

const Store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware, loggerMiddleware),
);

// Store
//   .dispatch(sendMessage('Hi'))
//   .then(() => console.log(Store.getState()))

export default Store;


/*
    {
        status:{
            sending: false,
            error: false
        }
        conversation: [
            {
                id: Date.now(),
                sender: true,
                text: 'Hi'
            },
            
                id: Date.now(),
                sender: false,
                text: 'Hello, How can I help you?'
            },
            {
                id: Date.now(),
                sender: true,
                text: 'I'd like to book a reservation for 2 guest for tomorrow'
            }
        ],
        selectedResponse: ...
        responses: [
            {
                id: Date.now(),
                status: 200,
                raw: {
                    ...
                }
            }
        ],
    }
*/