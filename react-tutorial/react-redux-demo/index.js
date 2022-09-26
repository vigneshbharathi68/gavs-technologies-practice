const store = require("./src/store")

console.log('Initial State', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Updated State ', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked())

