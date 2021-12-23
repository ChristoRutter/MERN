import React from 'react'

const Color = (props) => {
    if(isNaN(props.string)){
    return (
        <h1
        style={
            props.color !== undefined && props.bcolor !== undefined?
            {
            color: props.color,
            backgroundColor: props.bcolor
        }
        :{}
    
    }
        >Your word is: {props.string}</h1>
    )
    }
    else{
        return(
        <h1>Your number is: {props.string}</h1>
        )
    }
}

export default Color