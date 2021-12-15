import React, {useState} from 'react'

const Display = (props) => {
    const {setActive} = props

    const handler = (e) => {
        setActive(e.target.value)
    }


    return (

        
        <div>
        <button onClick={handler} value={0} name="theme" type="radio">Tab 1</button>
        


        <button onClick={handler} value={1} name="theme" type="radio">Tab 2</button>
        


        <button onClick={handler} value={2} name="theme" type="radio">Tab 3</button>
        
    </div>

    )
}
export default Display