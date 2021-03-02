import React, { useRef } from 'react'
import '../02-useEfect/effect.css'
export const FocusScreen = () => {

    const inputref = useRef();


    const handleClick = () =>{
        inputref.current.select();
        console.log(inputref)
    }
    return (
        <div>
            <h1>FocusScreen</h1>
            <hr/>
            <input
                ref={inputref}
                className="form-control"
                placeholder="tu nombre"
            />
            <button 
                className="btn btn-outline-primary mt-5"
                onClick={handleClick}
            >
                Focus
            </button>

        </div>
    )
}
