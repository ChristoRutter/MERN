import React, {useState} from 'react';

const Form = (props) => {

    const {list, setList, checker} = props
    const [item, setItem] = useState("")

    const deleteById = (idFromBelow)=>{
        setList(list.filter((current, index)=>current.id !== idFromBelow))
    }

    const updateList = (idB) => {
        let updatedCompleteList = list.map((current, index)=>{
            if(idB === current.id){
                let updatedItem = {...current}
                updatedItem.complete = !updatedItem.complete
                return updatedItem
            }
            return current
        })
        setList(updatedCompleteList)
    }

    
    const addStuff = (e) => {
        e.preventDefault()
        
        setList([...list, {
            item: item,
            id: Math.floor(Math.random() * 100000000),
            complete: false
        }])
        
        setItem("")

    }
    // let styled = (complete) => {
    //     if(complete === true) {
    //         return "completed"
    //     }
    //     else{
    //         return "notCompleted"
    //     }
    // }
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
                           { 
                            current.complete?
                            <span className= "completed">{current.item}</span>
                            :<span className= "notCompleted">{current.item}</span>
                            // <span className={`${styled(current.complete)}`}>

                            //     {current.item}
                            // </span>
                            }
                            
                            <input
                                className="m-2"
                                type="checkbox"
                                onChange = {(e)=> {
                                    updateList(current.id)
                                }}
                                checked={current.complete}
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