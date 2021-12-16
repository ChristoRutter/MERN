import React, {useState} from 'react';

const Form = (props) => {

    const {list, setList, checker} = props
    const [item, setItem] = useState("")

    const addStuff = (e) => {
        e.preventDefault()
        setList([...list, {
            item: item,
            id: Math.floor(Math.random() * 100000000),
            checker: checker
        }])
        
        setItem("")

    }

    return (

        <form onSubmit = {addStuff}>
            <p>
                <input type="text" onChange = {(e)=>setItem(e.target.value)} value={item}
                className="border-2 border-black m-5 shadow-lg"></input>
            </p>
            <input type="submit" value="Add" 
            className="bg-blue-500 p-5 rounded-md text-white"></input>
        </form>
    )
}

export default Form