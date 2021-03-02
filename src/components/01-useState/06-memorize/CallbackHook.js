import React, { useCallback, useState } from 'react'
import '../02-useEfect/effect.css';
import { ShowInput } from './ShowInput';

export const CallbackHook = () => {
    console.log("me volvi a generar :c ")

    const [counter, setCounter] = useState(10)
    // const increment = () =>{
    //     setCounter(counter + 1);   
    // }
    const increment = useCallback(()=>{
            setCounter(c => c + 1);        
        },
        [setCounter]
    )
    return (
        <div>
            <h1>Callback hook: { counter } </h1>
            <hr/>
            <ShowInput increment={increment}/>
            
        </div>
    )
}
