import react, { useRef } from "react";
import Button from "./Button";

function ImperativeHandle () {
    const btnRef = useRef(null)
    return (
        <div>
            <button onClick={() => { btnRef.current.alterToggle() }}>Button From Parent</button>
            <Button ref={ btnRef }/>
        </div>
    )
}

export default ImperativeHandle;