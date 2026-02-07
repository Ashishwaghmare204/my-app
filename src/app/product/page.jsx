"use client"
import React from 'react'
import { useState } from 'react';

import Mybtn from '../components/Mybtn'
const product=[
    {   id:1,
        name:'product1',
        price:100,
        description:'this is product 1'
    },
    {id:2,
        name:'product2',
        price:200,
        description:'this is product 2'     
    }
]
const ProductPage = () => {
     const [count,setCount]=useState(0)
        function handleClick(){
            setCount(count+1);
           
        }
    const productList=product.map(item=>{
        return(
        <li key={item.id}>
       
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>
        </li>
        )
    })
  return (
    <div>
        <ul>
            {productList}
        </ul>
                <p>Button clicked {count} times</p>
        <Mybtn count={count} onClick={handleClick} />
        <Mybtn count={count} onClick={handleClick} />
    </div>
  )
}

export default ProductPage