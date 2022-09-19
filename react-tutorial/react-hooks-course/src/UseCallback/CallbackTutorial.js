import React, { useState, useCallback } from 'react';
import Child from './Child'

export default function CallBackTutorial() {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("Yo, pls sub to the channel")

    const returnComponent = useCallback(() => {
        return data
    }, [data])

    return (
        <div className="App">
            <Child returnComponent={returnComponent} />
            <button
                onClick={() => {
                    setToggle(!toggle)
                }}
            >
                Toggle
            </button>
            { toggle && <h1> toggle </h1> }
        </div>
    )
}