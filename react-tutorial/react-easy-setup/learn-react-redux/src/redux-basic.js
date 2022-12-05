import { createStore } from 'redux';
// STORE -> GLOBALIZED STATE
// ---------------------------------

// ACTION -> INCREMENT
const increment = () => {
    return {
      type: 'INCREMENT'
    }
  }
  
  const decrement = () => {
    return {
      type: 'DECREMENT'
    }
  }
  
  // REDUCER -> DESCRIBES HOW YOUR ACTION TRANSFORMS THE STATE INTO THE NEXT STATE
  const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
    }
  }
  
  let store = createStore(counter);
  
  // DISPLAY IT IN THE CONSOLE
  store.subscribe(() => console.log(store.getState()))
  // DISPATCH -> EXECUTES THE CODE BASED ON A ACTION
  store.dispatch(increment());