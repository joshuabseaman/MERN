import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/product/delete/${deleteId}`)
            .then(response=>{
                props.onDelete(deleteId)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
        <h1>All Products: </h1>
        {
        props.products.map((product, i)=>{
            return(
                <div key={i}>
                <Link to={"/" + product._id}>{product.title}</Link>
                <button onClick={()=>handleDelete(product._id)}>Delete</button>
                </div>
            )})
        }
        </div>
    )
}

export default ProductList;