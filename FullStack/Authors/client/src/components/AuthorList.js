import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router'

const AuthorList = (props) => {
    const [authorList, setAutorList] = useState([])
    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setAutorList(res.data)
            })
            .catch((err) => {console.log(err)})
    }, [])
    const deleteAuthor = (belowId) => {
        axios.delete(`http://localhost:8000/api/authors/${belowId}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setAutorList(authorList.filter((author, index)=>author._id !== belowId))
            })
            .catch((err)=>{console.log(err)})
    }
    



    return (
        <div>
            <h1>Favorite Author</h1>
            <header>
                
                <Link to="/add">add an author</Link>
                
            </header>
            <body>

                


                
                {
                    authorList.sort((a, b) => a.name > b.name ? 1:-1).map((author, index) =>(
                        <div key={index}>
                        
                        
                                <h3>{author.name}</h3>
                            
                           
                            <div>
                                <button><Link to={`/edit/${author._id}`}>Edit</Link></button>
                                <button onClick={()=> deleteAuthor(author._id)}>Delete</button>
                            </div>
                            
                        </div>
                    ))
                }
            </body>
        </div>
    )

}

export default AuthorList