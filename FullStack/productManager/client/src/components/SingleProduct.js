import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "@reach/router";

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


    return (

        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>

    )


}

export default SingleProduct