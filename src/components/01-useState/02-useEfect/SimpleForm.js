import React, {useEffect, useState} from 'react'
import "./effect.css";
import {Message} from './Message';
export  function SimpleForm() {

    
    const [formState, setFormState] = useState({
        name : '', 
        email : ''
    });

    const {name, email} = useState();

    useEffect(()=>{
        // console.log("hey");

    }, []);

    useEffect(()=>{
        // console.log("cambio el formulario");

    }, [formState]);

    useEffect(()=>{
        // console.log("cambio el email");

    }, [formState.email]);
    const handleInputChange = ({target}) =>{

        setFormState({
            ...formState,
            [target.name] : target.value
        });
    }
    return (
        <>  
           <h1>useEffect</h1> 
           <hr/>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>
            { formState.name === '123' && <Message />}
        </> 
    )
}
