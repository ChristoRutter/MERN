import React, {useState} from 'react'

const Form = (props) => {

    const {box, setBox} = props
    const [color, setColor]= useState("")
    const [width, setWidth]= useState("")
    const [height, setHeight]= useState("")

    const createBox = (e) => {
        e.preventDefault()
        setBox([...box, {
            color: color,
            width: width + "px",
            height: height + "px"
        }])
        setColor("")
        setWidth("")
        setHeight("")
    }

    return (
        <form onSubmit={createBox}>
            <label>Color: </label>
            <input onChange={(e)=>{setColor(e.target.value)}} value={color} type="text"></input>
            <label>Width: </label>
            <input onChange={(e)=>{setWidth(e.target.value)}} value={width} type="text"></input>
            <label>Height: </label>
            <input onChange={(e)=>{setHeight(e.target.value)}} value={height} type="text"></input>
            <input type="submit" value="Add"/>
        </form>
    )
}

export default Form