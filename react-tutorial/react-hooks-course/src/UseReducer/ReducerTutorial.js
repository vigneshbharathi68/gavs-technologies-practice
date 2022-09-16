import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { 
                ...state, 
                count: state.count + 1 
            }
        case 'toggle':
            return { 
                ...state, 
                showText: !state.showText 
            };
        default: 
            return state;
    }
}

const ReducerTutorial = () => {
    const [ state, dispatch ] = useReducer(reducer, {count: 0, showText: true})

    return (
        <div>
            <h1> { state.count } </h1>
            <button 
                onClick={() => {
                    dispatch({ type: 'INCREMENT' })                    
                    dispatch({ type: 'toggle' })
                }}
            >
                Click Here
            </button>
            { state.showText && <p>Thi is a text</p> }
        </div>
    )
}

export default ReducerTutorial;

