import React from 'react'

const Color = (props) => {

    return (


        <h1
        style={{
            color: props.color,
            backgroundColor: props.bcolor
        }}
        >Your word is: {props.string}</h1>
    )
}

export default Color