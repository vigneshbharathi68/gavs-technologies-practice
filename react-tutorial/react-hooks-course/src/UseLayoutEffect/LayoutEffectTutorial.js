import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial () {
    const inputRef = useRef(null)
    useLayoutEffect(() => {
        console.log("UseLayoutEffect")
        console.log(inputRef.current.value)
    }, []);

    useEffect(() => {
        inputRef.current.value = "Hello"
        console.log("UseEffect");
    }, [])

    return (
        <div>
            <input ref={inputRef} value="Vignesh" style={{width: 400, height: 50}} />
        </div>
    );
}

export default LayoutEffectTutorial;