import React, {useState} from 'react';

const Form = (props) => {

    const {list, setList, checker} = props
    const [item, setItem] = useState("")

    const deleteById = (idFromBelow)=>{
        setList(list.filter((current, index)=>current.id !== idFromBelow))
    }

    
    const addStuff = (e) => {
        e.preventDefault()
        setList([...list, {
            item: item,
            id: Math.floor(Math.random() * 100000000),
        }])
        
        setItem("")

    }

    return (
        <div>
            <form onSubmit = {addStuff}>
                <p>
                    <input type="text" onChange = {(e)=>setItem(e.target.value)} value={item}
                    className="border-2 border-black m-5 shadow-lg"></input>
                </p>
                <input type="submit" value="Add" 
                className="bg-blue-500 p-5 rounded-md text-white"></input>
            </form>

            <div>
            <h2 className="m-5 text-2xl underline">
                Items:
            </h2>
            <div>

                {list.map((current, index) => (
                    <div 
                    key={index}>
                        <p>
                            <span
                            {...checker === true?
                                {className: "line-through"}
                                :null

                            }
                            
                            >

                                {current.item}
                            </span>
                            <input
                                className="m-2"
                                type="checkbox"
                            
                            ></input>
                            <button 
                                className="bg-black p-1 m-3 rounded-md text-white"
                                onClick={()=>deleteById(current.id)}
                            >Delete </button>
                        </p>
                    </div>
                ))}
            </div>
        </div>

        </div>
    )
}

export default Form