import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const EditProduct = (props) => {
    const{id} = props;


    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch((err)=>{console.log(err)})
    }, [])
    

    const productEdit = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/products/${id}`,
        {
            title,
            price,
            description
        }
        )
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                navigate("/")
            })
            .catch((err)=>{console.log(err)})

    }


    return (

        <div>
            <Link to={"/"}>Home</Link>
                <form onSubmit={productEdit}>
                <p>
                    <label>Title: </label>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text"></input>
                </p>
                <p>
                    <label>Price: </label>
                    <input value={price} onChange={(e)=>setPrice(e.target.value)} type="number"></input>
                </p>
                <p>
                    <label>Description: </label>
                    <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text"></input>
                </p>
                <button>Edit</button>
            </form>
        </div>

    )


}

export default EditProduct