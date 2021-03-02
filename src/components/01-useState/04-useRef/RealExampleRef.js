import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../02-useEfect/effect.css'
export const RealExampleRef = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>Real Example</h1>
            <hr/>
            { show && <MultipleCustomHooks/>}
            <button
                className="btn btn-primary"
                onClick={()=>{ setShow(!show)}}
            >

            </button>
        </div>
    )
}
