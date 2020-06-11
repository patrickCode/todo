import { manager } from './manager';

const notificationCounterReducer = (state, action) => {
    if (state === undefined) 
        state = 0;
    if (action.type === 'INCREMENT') {
        return state + 1;
    }
    if (action.type === 'DECREMENT') {
        if (state > 0)
            return state - 1;
        else
            return 0;
    }
    if (action.type === 'RESET') {
        return 0;
    }
    return state;
};

export const store = manager(notificationCounterReducer);









// state is a number - 15 --> 14/0
// Action
//   Decrement
//   Increment - value
//   Reset
//   { 
//      type: 'Increment',
//      amount: 3
 //  }



