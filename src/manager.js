export const manager = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);

        if (listeners.length > 0)
            listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
    }

    dispatch({});

    return {
        getState,
        dispatch,
        subscribe
    }
}