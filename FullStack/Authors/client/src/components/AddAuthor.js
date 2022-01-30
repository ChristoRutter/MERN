import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router'

const AuthorList = (props) => {
    const [authorList, setAuthorList] = useState([])
    const [name, setName] = useState("")
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setAuthorList(res.data)
            })
            .catch((err) => {console.log(err)})
    }, [])

    const newAuthorSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`,
        {
            name
        }
        )
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
                console.log("err.response.data.errors",err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }



    return (
        <div>
            

            <h1>Favorite Authors</h1>
            
                <Link to={"/"} >home </Link>
            
            <h2>Add an author:</h2>

            <form onSubmit={newAuthorSubmit}>
                
                
                
                    <p>
                        <label>Author Name:</label>
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text"></input>

                        {
                            errors.name?
                            <span>{errors.name.message}</span>
                            :null
                        }
                    </p>
                    
                
                
               


                <button><Link to={"/"}>Cancel</Link></button>
                <button>Add Author</button>
                
            </form>
            
        </div>
    )

}

export default AuthorList