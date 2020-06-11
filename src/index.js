import React from 'react';
import {
    render
} from 'react-dom';
import { store } from './notification';
import { Counter } from './counter';

// const Hello = () => {
//         return ( <h1>Hello</h1>);
//         }

// render(<Hello />, document.getElementById('app'));

const renderApp = () => {
    render(<Counter 
                value={store.getState()}
                onIncrement={() => store.dispatch({type: 'INCREMENT'})}
                onDecrement={() => store.dispatch({type: 'DECREMENT'})}
        />, document.getElementById('app'));
};
renderApp();

console.log('Initial State' + store.getState());

const logState = () => {
    console.log('[Log State] New State ' + store.getState());    
};
store.subscribe(logState);
store.subscribe(renderApp);

// console.log("Adding 1 to state");
// store.dispatch({ type: 'INCREMENT' });
// //console.log('New State ' + store.getState());

// console.log("Adding 1 to state");
// store.dispatch({ type: 'INCREMENT' });
// //console.log('New State ' + store.getState());

// console.log("Adding 1 to state");
// store.dispatch({ type: 'INCREMENT' });
// //console.log('New State ' + store.getState());

// console.log("Negating 1 to state");
// store.dispatch({ type: 'DECREMENT' });
// console.log('New State ' + store.getState());

// console.log("Reset the state");
// store.dispatch({ type: 'RESET' });
// console.log('New State' + store.getState());


// console.log(notificationCounterReducer(0, { type: 'INCREMENT' }));
// console.log(notificationCounterReducer(5, { type: 'DECREMENT' }));
// console.log(notificationCounterReducer(10, { type: 'RESET' }));

