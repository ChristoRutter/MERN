import React, {useState} from 'react';





const Form = (props)=>{

    const {userList, setUserList} = props;


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    



    const submitForm = (e)=>{
        e.preventDefault();

        setUserList([...userList, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }])
        {setFirstName ("")}
        {setLastName ("")}
        {setEmail ("")}
        {setPassword ("")}
        {setConfirmPassword ("")}
        


    }

    return (
        <div>

            <form
                onSubmit={submitForm}
            >
                <p>
                    {firstName.length > 0 && firstName.length < 2?
                    <span>Must be at least 2 characters <br/></span>
                    :null    
                    }
                    <label>First Name: </label>

                    <input
                        onChange={(e) => {setFirstName(e.target.value);}}

                        value={firstName}
                        name="name"
                        type="text"
                    />
                </p>
                <p>
                    {lastName.length > 0 && lastName.length < 2?
                    <span>Must be at least 2 characters <br/></span>
                    :null
                    }
                    <label>Last Name: </label>

                    <input
                        onChange={(e) => {setLastName(e.target.value);}}

                        value={lastName}
                        name="name"
                        type="text"
                    />
                </p>
                <p>
                    {email.length > 0 && email.length < 5?
                    <span>Must be at least 5 characters <br/></span>
                    :null    
                    }
                    <label>Email: </label>

                    <input
                        onChange={(e) => {setEmail(e.target.value);}}

                        value={email}
                        name="name"
                        type="email"
                    />
                </p>
                <p>
                    {password == confirmPassword? 
                    null
                    :<span>Passwords must match! <br /></span>
                    }
                    <label>Password: </label>

                    <input
                        onChange={(e) => {setPassword(e.target.value);}}

                        value={password}
                        name="name"
                        type="password"
                    />
                </p>
                <p>

                    <label>Confirm Password: </label>

                    <input
                        onChange={(e) => {setConfirmPassword(e.target.value);}}

                        value={confirmPassword}
                        name="name"
                        type="password"
                    />
                </p>

            

                <input className="submitButton" type="submit" value="Submit Form" />
            </form>

        </div>
    );
}

export default Form;