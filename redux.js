// Notes for Redux State Management 
// 1. Store
// 2. Reducer --> function to change store
// 3. Dispatching Action
// 4. Subscription

const redux = require('redux');
const createStore = redux.createStore;


// untuk initial state in Reducer 
const initialState = {
    value: 0,
    age: 17
}

// Reducer 
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_AGE':
            return {
                ...state, // copy object then baru ubah (mutable)
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state, // copy object then baru ubah (mutable)
                value: state.value + action.newValue
            }
        default:
            return state;
    }
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription 
store.subscribe(() => {
    console.log('store change: ', store.getState());
})


// Dispatching Action
store.dispatch({
    type: 'ADD_AGE' // property wajib
})
store.dispatch({
    type: 'CHANGE_VALUE', // property wajib
    newValue: 12
})
console.log(store.getState());