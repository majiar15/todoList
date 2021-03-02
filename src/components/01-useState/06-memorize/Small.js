import React from 'react'

export const Small = React.memo(({value}) => {

    console.log("me volvi a llamar :c");

    return (
        <small>
            {value}
        </small>
    )
})
