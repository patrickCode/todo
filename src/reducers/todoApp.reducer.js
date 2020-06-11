const initState = [];

export const todoAppReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case "DELETE_TODO":
            var index = state.findIndex(todo => todo.id === action.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        case "TOGGLE_TODO":
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            });
    }
};


// Actions - ADD_TODO/DELETE_TODO/TOGGLE_TODO
// State - [{ id: 1, task: 'Learn redux', 'time': '', completed: false }] 
//
//
// var arr = [1, 2, 3, 4, 5]
// var new_arr = arr.slice(0).concat({})
//
// var arr = [1, 2, 3, 4, 5]
// var sqArr = arr.map(v => { return v*v; });
// [1, 4, 9, 16, 25]


// [{ id: 1, task: 'Learn redux', completed: false }
//  {id: 2, task: 'Learn react', completed: false}];

// {
//     type: 'TOGGLE_TODO',
//     id: 2
// }

// [{ id: 1, task: 'Learn redux', completed: false }
//  { id: 2, task: 'Learn react', completed: true}];












