import React from 'react'
import { useCounter } from '../../../hooks/useCounter'
import { useFetch } from '../../../hooks/useFetch'
import '../02-useEfect/effect.css'
export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];

    // const {} **]][[¨¨]]
    return (
        <div>
            <h1>BreakingBad  Qoutes</h1>
            <hr/>
            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :   
                    (
                        <blockquote className="blockquote text-right">
                            <p > {quote}</p>
                            <footer className="blockquote-footer"> {author} </footer>
                        </blockquote>
                    )
            }
            
            <button className="btn btn-primary" onClick={increment}>
                Siguiente qoute
            </button>
            
        </div>
    )
}
