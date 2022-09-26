const { createStore, combineReducers, applyMiddleware  } = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"


function buyCake() {
    return {
        type:  BUY_CAKE,
        info: "First redux action"
    }
}
function buyIceCreams() {
    return {
        type: BUY_ICECREAM
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }
const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// const reducer = ( state = initialState, action) => {
//     switch ( action.type ) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }

const cakeReducer = ( state = initialCakeState, action) => {
    switch ( action.type ) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = ( state = initialIceCreamState, action) => {
    switch ( action.type ) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}
const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducers, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe( () => {} )
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCreams())

unsubscribe()
