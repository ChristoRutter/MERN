import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router'
import AuthorList from './AuthorList';

const EditAuthor = (props) => {
    const {id} = props

    const [name, setName] = useState("")
    const [errors, setErrors] = useState({})


    useEffect(() =>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setName(res.data.name)
            })
            .catch((err) =>{console.log(err)})
    }, [])

    const editAuthorHandler = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/authors/${id}`,{
            name
        })
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
            
            <h1>Favorite Author</h1>
            <Link to={"/"} >home </Link>
            <h2>Edit</h2>

            <form onSubmit={editAuthorHandler}>
                

                <p>
                    <p><label>Name:</label></p>
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text"></input>

                    {
                        errors.name?
                        <span>{errors.name.message}</span>
                        :null
                    }
                </p>
                
                <button><Link to={"/"}>Cancel</Link></button>
                <button>Edit</button>
            </form>
        </div>
    )

}

export default EditAuthor