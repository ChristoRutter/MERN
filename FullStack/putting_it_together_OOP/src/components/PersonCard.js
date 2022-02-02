import React, { useState } from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    const [addAge, setAddAge] = useState(age)

    const increase = () => {
        setAddAge(addAge + 1)
    }
    return (
        <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {addAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={increase}>Increase Age</button>
        </>
    )
}
export default PersonCard;