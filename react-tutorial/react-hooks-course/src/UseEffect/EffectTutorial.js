import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EffectTutorial = () => {
    const [ data, setData ] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            console.log("ÄPI WAS CALLED")
            setData(response.data[0].email)
        })
    }, []);

    return (
        <div>
            Hello world { data }
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click me to increase the count</button>
        </div>
    )
}

export default EffectTutorial;
