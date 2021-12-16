import React from 'react'

const Display = (props) => {

    const{list, setList, checker, setChecker} = props
    

    


    const deleteById = (idFromBelow)=>{
        setList(list.filter((current, index)=>current.id !== idFromBelow))
    }




    return(
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
                                onChange = {(e)=> 
                                    setChecker(e.target.checked)
                                }
                                value={checker}
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


    )
}

export default Display