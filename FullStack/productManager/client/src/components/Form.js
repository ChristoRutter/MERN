import React from "react";

const Form = (props) => {


    return (
        <form>
            <p>
                <label>Title: </label>
                <input type="text"></input>
            </p>
            <p>
                <label>Price: </label>
                <input type="number"></input>
            </p>
            <p>
                <label>Description: </label>
                <input type="text"></input>
            </p>
        </form>

    )


}

export default Form