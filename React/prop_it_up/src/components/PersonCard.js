const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props.person
    return (
        <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </>
    )
}
export default PersonCard;