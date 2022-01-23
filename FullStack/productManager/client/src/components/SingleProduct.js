import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const SingleProduct = (props) => {
    const{id} = props;

    const [product, setProduct] = useState({})

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err) =>{
                console.log(err)
            })
            
    }, [id])

    const deleteProduct = (belowId) => {
        axios.delete(`http://localhost:8000/api/products/${belowId}`)
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
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>

    )


}

export default SingleProduct