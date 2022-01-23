import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";


const ProductList = (props) => {

    const [productList, setProductList] = useState([])
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setProductList(res.data)
            })
            .catch((err)=>{console.log(err)})
    }, [])

    const productSubmit = (e)=>{
        
        axios.post("http://localhost:8000/api/products", 
        {
            title,
            price,
            description
        })
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                navigate("/")
            })
            .catch((err)=>{console.log(err)})
    }


    return (

        <div>
            <h1>Product Manager</h1>
            

            
            <form onSubmit={productSubmit}>
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
            <button>Create</button>
        </form>
        


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