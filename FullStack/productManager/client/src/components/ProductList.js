import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Form from "../components/Form"

const ProductList = (props) => {

    const [productList, setProductList] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setProductList(res.data)
            })
            .catch((err)=>{console.log(err)})
    }, [])


    return (

        <div>
            <h1>Product Manager</h1>
            <Form />


            {
                productList.map((product, index) => (

                    <div key={index}>
                        <Link to={`/products/${product._id}`}>
                        <p>{product.title}</p>
                        </Link>
                    </div>
            ))
            }
        </div>

    )


}

export default ProductList